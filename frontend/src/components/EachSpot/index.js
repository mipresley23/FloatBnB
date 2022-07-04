import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import { thunkCreateBooking, thunkDeleteBooking, thunkGetBookings } from "../../store/bookings";
import { thunkGetImages } from "../../store/images";
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



  const spotSelector = useSelector(state => state.spots);
  const imageSelector = useSelector(state => state.images);
  const sessionUser =  useSelector(state => state.session.user);
  const bookingSelector = useSelector(state => state.bookings);

  const spot = spots.find(spot => spot.id === +id);
  const image = images.find(image => image.id === +id);

  const correctUser = () => {
    return sessionUser && spot && sessionUser.id === spot.userId;
  }


  const todaysFullDate = new Date()
  const todaysDate = (todaysFullDate.getDate() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const todaysMonth = (todaysFullDate.getMonth() + 1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
  const currentYear = todaysFullDate.getFullYear()


  const spotsWithBookings = bookings && bookings.map(booking => {
    return [booking.spotId, booking.startDate, booking.endDate];
  })
  console.log('spotsWithBookings', spotsWithBookings)
  console.log('id:', id, 'type', typeof id);

const thisSpotsBookings = []
spotsWithBookings && spotsWithBookings.forEach(ele => {
  if(ele[0] === +id) thisSpotsBookings.push(ele)
})
console.log('bookingsforthisspot: ', thisSpotsBookings)

const findDateRange = (d1, d2) => {
  const date = new Date(d1);
  const dates = [];
  while(date <= new Date(d2)) {
    dates.push(new Date(date).toISOString().slice(0, 10));
    date.setDate(date.getDate() + 1);
  }
  console.log('dates: ', dates)
  return dates
}
console.log('date check:', new Date('2022-07-06') < new Date('2022-07-09'))

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

console.log('real date range: ', realRange);




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
     throw new Error('Please choose a different date.');
    }

    await dispatch(thunkCreateBooking(newBooking))
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
// if(!images) return null;

return(
  <div id="each-spot-main-container">
    <div className="each-spot-card">
      <h1 id="spot-name-title">{spot.name}</h1>
      <img id='each-spot-image' src={image && image.url} alt="spot"></img>
      <p id="spot-price-label">{`$${spot.price}/night`}</p>
      <div id="each-spot-button-container">
        <button class='each-spot-buttons' id='back-to-spots-button' type="button" onClick={handleReloadSpots}>Back to Spots</button>
        {sessionUser && <button class='each-spot-buttons' id="book-spot-button" type="button" onClick={handleBookingSpotButton}>Book this Spot</button>}
        {sessionUser && correctUser() && <div id="edit-delete-button-container"><button class='each-spot-buttons' type="button" onClick={handleEditSpotButton}>Edit this Spot</button>
        <button class='each-spot-buttons' type="button" onClick={handleDelete}>Delete Spot</button></div>}
      </div>
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

          {!showEditForm && ShowBookingForm && <form className="create-booking-form" onSubmit={handleBookingSubmit}>
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
          </form>}
        </section>
    </section>
  </div>
)

}
