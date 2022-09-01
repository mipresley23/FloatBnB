import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import { thunkCreateBooking, thunkDeleteBooking, thunkGetBookings } from "../../store/bookings";
import { thunkGetImages } from "../../store/images";
import { thunkGetMarinas } from "../../store/marinas";
import { thunkGetAllUsers } from "../../store/users";
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
  const marina = marinas.find(marina => marina.id === spot.marinaId)
  console.log('marina: ', marina)
  console.log('spot', spot)


  const correctUser = () => {
    return sessionUser && spot && sessionUser.id === spot.userId;
  }


  const todaysFullDate = new Date()
  const todaysDate = (todaysFullDate.getDate() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const todaysMonth = (todaysFullDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const currentYear = todaysFullDate.getFullYear()

  const thisSpotsUser = users && users.find(user => user.id === spot.userId)
  console.log('this user: ', thisSpotsUser)

  const spotsWithBookings = bookings && bookings.map(booking => {
    return [booking.spotId, booking.startDate, booking.endDate];
  })



  const thisSpotsBookings = []
  spotsWithBookings && spotsWithBookings.forEach(ele => {
    if(ele[0] === +id) thisSpotsBookings.push(ele)
  })


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
    history.push('/api/spots')
  }

  const handleReloadSpots = (e) => {
    e.preventDefault();
    history.push('/api/spots');;
  }

  useEffect(() => {
    dispatch(thunkGetOneSpot(id))
  }, [dispatch, id])


  const handleBookingSubmit = async (e) => {
    e.preventDefault();
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
    setShowBookingForm(false)
    window.alert('Congratulations on your upcoming Vacation! \n Go to your profile to see the details of your stay!')
  }

  const handleEditSpotButton = () => {
    setShowEditForm(true);
    setShowBookingForm(false);
  }

  const handleBookingSpotButton = () => {
    setShowEditForm(false);
    setShowBookingForm(true);
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
  // history.push(`/api/spots/${+id}`)
  setShowEditForm(false);
}

const handleStartDateSelect = (e) => {
  setBookingStartDate(e.target.value)
  setBookingEndDate(e.target.value);
}



if(!spot) return null;
if(!marina) return null;
// if(!images) return null;

return(
  <>
    <div id="each-spot-main-content">
      <div className="each-spot-header-info">
        <h2 id="spot-name-title">{spot.name}</h2>
        <div id="spot-header-labels">
          <p id="spot-header-hosted-by">Hosted by: {thisSpotsUser.username}</p>
          <p id="spot-header-location">{marina.city}, {marina.state}, {marina.country}</p>
        </div>
      </div>
      <div id="spot-images-container">
        <img className='each-spot-images' id='each-spot-image-one' src={image && image.url} alt="spot"></img>
        <div id="spot-images-column-two">
          <img className='each-spot-images' id='each-spot-image-two' src={image && image.url} alt="spot"></img>
          <img className='each-spot-images' id='each-spot-image-three' src={image && image.url} alt="spot"></img>
        </div>
        <div id="spot-images-column-three">
          <img className='each-spot-images' id='each-spot-image-four' src={image && image.url} alt="spot"></img>
          <img className='each-spot-images' id='each-spot-image-five' src={image && image.url} alt="spot"></img>
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
      <section className="booking-form-container">

            <form className="create-booking-form" onSubmit={handleBookingSubmit}>
              <ul id="booking-errors-list">
                {errors && errors.map(err => <li>{`${err}`}</li>)}
              </ul>
              <input
                type="date"
                required
                value={bookingStartDate}
                min={`${currentYear}-${todaysMonth}-${todaysDate}`}
                onChange={(e) => setBookingStartDate(e.target.value)} />

              <input
                type="date"
                required
                value={bookingEndDate}
                min={bookingStartDate}
                onChange={(e) => setBookingEndDate(e.target.value)} />
              <button class='each-spot-buttons' id='book-spot-submit-button' type="submit">Create</button>
              <button className="each-spot-buttons" id="book-spot-cancel-button" type="button" onClick={() => setShowBookingForm(false)}>Cancel</button>
            </form>
          </section>
      </section>
    </div>
  </>
)

}
