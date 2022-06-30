import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import { thunkCreateBooking } from "../../store/bookings";
import { thunkGetImages } from "../../store/images";
import '../../index.css';

export default function EachSpot() {
  const dispatch = useDispatch()
  const history = useHistory();
  const {id} = useParams()

  // const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [spotName, setSpotName] = useState();
  const [spotPrice, setSpotPrice] = useState(null);
  const [spots, setSpots] = useState([]);
  const [images, setImages] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState('');
  const [ShowBookingForm, setShowBookingForm] = useState(false);


  const spotSelector = useSelector(state => state.spots);
  const imageSelector = useSelector(state => state.images);
  const sessionUser =  useSelector(state => state.session.user);

  const spot = spots.find(spot => spot.id === +id);
  const image = images.find(image => image.id === +id);

  const correctUser = () => {
    return sessionUser && spot && sessionUser.id === spot.userId;
  }

  console.log(correctUser())



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

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(thunkDeleteSpot(id))
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
    await dispatch(thunkCreateBooking(newBooking))
    setShowBookingForm(false)
    window.alert('Congratulations on your upcoming Vacation! \n Go to your profile to see the details of your stay!')
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
  setShowForm(false);
}

if(!spot) return null;
if(!images) return null;

return(
  <div>
    <div className="each-spot-card">
      <h1>{spot.name}</h1>
      <img src={image && image.url} alt="spot"></img>
      <p>{`$${spot.price}/night`}</p>
    </div>
    <button type="button" onClick={handleReloadSpots}>Back to Spots</button>
    {sessionUser && correctUser() && <div><button type="button" onClick={() => setShowForm(true)}>Edit this Spot</button>
    <button type="button" onClick={handleDelete}>Delete Spot</button></div>}
    <section className="edit-spot-form-container">
    {showForm && <form className="edit-spot-form" onSubmit={handleEditSubmit}>
      <input
        type="text"
        placeholder={spot.name}
        value={spotName}
        onChange={(e) => setSpotName(e.target.value)} />
      <input
        type="number"
        placeholder={spot.price}
        defaultValue={spot.price}
        min="0"
        value={spotPrice}
        onChange={(e) => setSpotPrice(e.target.value)} />
      <button type="submit">Edit this Spot</button>
      <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
    </form>}
    <section className="booking-form-container">
          {sessionUser && <button type="button" onClick={() => setShowBookingForm(true)}>Book this Spot</button>}
          {ShowBookingForm && <form className="create-booking-form" onSubmit={handleBookingSubmit}>
            <input
              type="date"
              required
              value={bookingStartDate}
              onChange={(e) => setBookingStartDate(e.target.value)} />
            <input
              type="date"
              required
              value={bookingEndDate}
              onChange={(e) => setBookingEndDate(e.target.value)} />
            <button type="submit">Create</button>
          </form>}
        </section>
    </section>
    <div className='footer'>
        <a href='https://expressjs.com/'>
          <img className='footer-images' id='express-svg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
        </a>
        <a href='https://www.sequelize.org/'>
          <img className='footer-images' id='sequelize-svg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" />
        </a>
        <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'>
          <img className='footer-images' id='javascript-svg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
        </a>
        <a href='https://www.reactjs.org/'>
          <img className='footer-images' id='react-svg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
        </a>
        <a href='https://www.redux.js.org/'>
          <img className='footer-images' id='redux-svg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
        </a>
        <a href='https://github.com/mipresley23'>
          <img className='footer-images' id='github-img' src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'/>
        </a>
        <a href='https://www.linkedin.com/in/michael-presley-96729b235/'>
          <img className='footer-images' id='linkedin-img' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" />
        </a>
      </div>
  </div>
)

}
