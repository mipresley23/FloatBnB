import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import { thunkCreateBooking, thunkDeleteBooking, thunkGetBookings } from "../../store/bookings";
import { thunkGetImages } from "../../store/images";
import { thunkGetMarinas } from "../../store/marinas";
import { thunkGetAllUsers } from "../../store/users";
import ComingSoonImg from '../userProfile/nophoto.jpeg';
import '../../index.css';
import './eachSpot.css';

export default function EachSpot() {
  const dispatch = useDispatch()
  const history = useHistory();
  const {id} = useParams()

  // const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [spotName, setSpotName] = useState();
  const [spotPrice, setSpotPrice] = useState();
  const [spots, setSpots] = useState([]);
  const [images, setImages] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState('');
  const [ShowBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState([])
  const [marinas, setMarinas] = useState([]);
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState([]);


  const userSelector = useSelector(state => state.users)
  const spotSelector = useSelector(state => state.spots);
  const imageSelector = useSelector(state => state.images);
  const sessionUser =  useSelector(state => state.session.user);
  const bookingSelector = useSelector(state => state.bookings);
  const marinaSelector = useSelector(state => state.marinas);

  const spot = spots.find(spot => spot.id === +id);
  const image = images.find(image => image.id === +id);
  const marina = spot && marinas && marinas.find(marina => marina.id === spot.marinaId)
  console.log('marina: ', marina)
  console.log('spot', spot)

  const todaysFullDate = new Date()
  const todaysDate = (todaysFullDate.getDate() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const todaysMonth = (todaysFullDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const currentYear = todaysFullDate.getFullYear()

  const correctUser = () => {
    return sessionUser && spot && sessionUser.id === spot.userId;
  }

  const thisSpotsUser = spot && users && users.find(user => user.id === spot.userId)

  const spotsWithBookings = bookings && bookings.map(booking => {
    return [booking.spotId, booking.startDate, booking.endDate];
  })

  const thisSpotsBookings = []
  spotsWithBookings && spotsWithBookings.forEach(ele => {
    if(ele[0] === +id) thisSpotsBookings.push(ele)
  })

  const formatStartEndDate = (bookingDate) => {
    const dateArr = bookingDate.split('-')
    return `${dateArr[1]}-${dateArr[2]}-${dateArr[0]}`
  }

  const findDateRange = (d1, d2) => {
    const date = new Date(d1);
    const dates = [];
    while(date <= new Date(d2)) {
      dates.push(new Date(date).toISOString().slice(0, 10));
      date.setDate(date.getDate() + 1);
    }
    return dates
  }

  const bookRanges = thisSpotsBookings && thisSpotsBookings.map(el => {
    return findDateRange(el[1], el[2])
  })
  console.log('range: ', bookRanges)
  const realRange = [];
  for(let i = 0; i< bookRanges.length; i++){
    let el = bookRanges[i]
    for(let j = 0; j < el.length; j++){
      let ele = el[j]
      realRange.push(ele)
    }
  }

  useEffect(() => {
    dispatch(thunkGetAllUsers())
  },[dispatch])

  useEffect(() => {
    setUsers(Object.values(userSelector))
  },[userSelector])

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])


  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setImages(Object.values(imageSelector))
  }, [imageSelector])

  useEffect(() => {
    dispatch(thunkGetBookings())
  }, [dispatch])

  useEffect(() => {
    setBookings(Object.values(bookingSelector))
  }, [bookingSelector])

  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinas(Object.values(marinaSelector))
  }, [marinaSelector])

  const handleDelete = async (e) => {
    e.preventDefault()
    const matchBooks = bookings.filter(booking => booking.spotId === +id)
    matchBooks && matchBooks.forEach((booking) => dispatch(thunkDeleteBooking(booking.id)))
    dispatch(thunkDeleteSpot(id))
    setBookings(Object.values(bookingSelector))
    history.push('/spots')
  }


  useEffect(() => {
    dispatch(thunkGetOneSpot(id))
  }, [dispatch, id])

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if(sessionUser){
    const newBooking = {
      startDate: bookingStartDate,
      endDate: bookingEndDate,
      spotId: +id,
      userId: sessionUser.id
    }
    if(realRange && realRange.includes(bookingStartDate)){
      window.alert('Sorry, this date is already booked.\n Please choose a different date.')
      setErrors(['Date already booked.','Please pick a new date.'])
      console.log('errors: ', errors);
     throw new Error('Please choose a different date.');
    }
      await dispatch(thunkCreateBooking(newBooking))
      setErrors([]);
      window.alert('Congratulations on your upcoming Vacation! \n Go to your profile to see the details of your stay!')
    }else{
      history.push('/login')
    }
  }

  const handleEditSpotButton = () => {
    setShowEditForm(true);
    setShowBookingForm(false);
  }



const handleEditSubmit = async (e) => {
  e.preventDefault();
  const newSpot = {
    id: id,
    name: spotName,
    price: spotPrice,
    userId: sessionUser.id,
    marinaId: spot.marinaId
  }
  await dispatch(thunkEditSpot(newSpot))
  setShowEditForm(false);
}

let start;
if(bookingStartDate){
  start = new Date(bookingStartDate)
}

let end;
if(bookingEndDate){
  end = new Date(bookingEndDate)
}

const startEnd = findDateRange(start, end)
const bookingLength = startEnd.length - 1;


if(!spots) return null;
if(!marina) return null;
// if(!images) return null;

return(
  <>
    <div id="each-spot-main-content">
      <div className="each-spot-header-info">
        <h2 id="spot-name-title">{spot.name}</h2>
        <div id="spot-header-labels">
          <p id="spot-header-hosted-by">Hosted by: {thisSpotsUser && thisSpotsUser.username}</p>
          <p id="spot-header-location">{marina.city}, {marina.state}, {marina.country}</p>
        </div>
      </div>
      <div id="spot-images-container">
        <img className='each-spot-images' id='each-spot-image-one' src={image ? image.url : ComingSoonImg} alt="spot"></img>
        <div id="spot-images-column-two">
          <img className='each-spot-images' id='each-spot-image-two' src={image ? image.url : ComingSoonImg} alt="spot"></img>
          <img className='each-spot-images' id='each-spot-image-three' src={image ? image.url : ComingSoonImg} alt="spot"></img>
        </div>
        <div id="spot-images-column-three">
          <img className='each-spot-images' id='each-spot-image-four' src={image ? image.url : ComingSoonImg} alt="spot"></img>
          <img className='each-spot-images' id='each-spot-image-five' src={image ? image.url : ComingSoonImg} alt="spot"></img>
        </div>
      </div>
      <div id="each-spot-button-container">
        {/* <button class='each-spot-buttons' id='back-to-spots-button' type="button" onClick={handleReloadSpots}>Back to Spots</button> */}
        {sessionUser && correctUser() && <div id="edit-delete-button-container"><button class='each-spot-buttons' type="button" onClick={handleEditSpotButton}>Edit this Spot</button>
        <button class='each-spot-buttons' type="button" onClick={handleDelete}>Delete Spot</button></div>}
      </div>
      <section className="edit-spot-form-container">
      {!ShowBookingForm && showEditForm && <form className="edit-spot-form" onSubmit={handleEditSubmit}>
        <input
          type="text"
          placeholder={spot.name}
          value={spotName}
          defaultValue={spot.name}
          required
          onChange={(e) => setSpotName(e.target.value)} />
        <input
          type="number"
          placeholder={spot.price}
          defaultValue={spot.price}
          min="0"
          value={spotPrice}
          onChange={(e) => setSpotPrice(e.target.value)} />
        <button class='each-spot-buttons' id='edit-spot-submit-button' type="submit">Submit Edit</button>
        <button class='each-spot-buttons' id='edit-spot-cancel-button' type="button" onClick={() => setShowEditForm(false)}>Cancel</button>
      </form>}
      </section>
      <section className="booking-form-container">
          <form className="create-booking-form" onSubmit={handleBookingSubmit}>
            <ul id="booking-errors-list">
              {errors && errors.map(err => <li>{`${err}`}</li>)}
            </ul>
            <div id="booking-form-price-headers">
            <h3 id="booking-form-price-per-night">${spot.price}</h3>
            </div>
            <div id="booking-form-label-inputs">
              <div id="booking-form-check-in">
                <label id="check-in-label">Check In</label>
                <input
                  type="date"
                  required
                  value={bookingStartDate}
                  min={`${currentYear}-${todaysMonth}-${todaysDate}`}
                  onChange={(e) => setBookingStartDate(e.target.value)} />
              </div>
              <div id="booking-form-check-out">
                <label id="check-out-label">Check Out</label>
                <input
                  type="date"
                  required
                  value={bookingEndDate}
                  min={bookingStartDate}
                  onChange={(e) => setBookingEndDate(e.target.value)} />
                </div>
              </div>
            <button class='each-spot-buttons' id='book-spot-submit-button' type="submit">Reserve</button>
            <div id="booking-pricing-info">
              <div id="current-checkin-checkout">
                {bookingStartDate && <p id="current-checkin-date">{formatStartEndDate(bookingStartDate)}</p>}
                {bookingStartDate && <p id="current-date-splitter">to</p>}
                {bookingEndDate && <p id="current-checkout-date">{formatStartEndDate(bookingEndDate)}</p>}
              </div>
              <div id="chosen-nights-price">
                {bookingStartDate && bookingEndDate && <p className='booking-pricing-labels'>${spot.price} x {bookingLength} nights</p>}
                {bookingLength > 0 ? <p className='booking-pricing-amounts'>${spot.price * bookingLength}</p> : null}
              </div>
              <div id="booking-cleaning-fee">
                <p className='booking-pricing-labels'>Cleaning Fee</p>
                <p className="booking-pricing-amounts">$0</p>
              </div>
              <div id="booking-service-fee">
                <p className="booking-pricing-labels">Service Fee</p>
                <p className="booking-pricing-amounts">$0</p>
              </div>
              {bookingLength > 0 && correctUser() && <div id='booking-owner-discount'>
                  <p className="booking-pricing-labels">Owner Discount</p>
                  <p className="booking-pricing-amounts">-{spot.price * bookingLength}</p>
                </div>}
              <div id="total-price">
                <p className='booking-pricing-labels' id="booking-total-label">Total</p>
                {bookingLength > 0 && sessionUser && !correctUser() ? <p className='booking-pricing-amounts' id="final-total-amount">${spot.price * bookingLength}</p> : bookingLength > 0 && sessionUser && correctUser() ? <p className='booking-pricing-amounts' id="final-total-amount">0</p> : <p className='booking-pricing-amounts' id="final-total-amount">0</p>}
              </div>
            </div>
          </form>
        </section>
        <div id="spot-desc-section-container">
          <div id="spot-description-container">
            <div id="spot-desc-header-container">
            <h3 id="spot-description-header">{spot.name}</h3>
            <h3 id='spot-desc-host'>Hosted by: {thisSpotsUser && thisSpotsUser.username}</h3>
            </div>
            <p id="spot-description-content">
              Eventually, each spot will have its own description. For now, we've created this
              generic description to fill in the space and make FloatBnB look good. Keep in mind FloatBnB is not a real rental site and none of these spots actually exist.
            </p>
          </div>
          <div id="spot-cover-container">
            <div id="spot-cover-headers">
              <h3 id="spot-cover-header-one">Float</h3>
              <h3 id="spot-cover-header-two">Cover</h3>
            </div>
              <p id="spot-cover-description">Every booking would include free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in if you could actually book any of these spots.</p>
          </div>
        </div>
    </div>
  </>
)

}
