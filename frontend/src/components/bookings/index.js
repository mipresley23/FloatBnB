import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { thunkGetBookings, thunkCreateBooking } from "../../store/bookings";
import { thunkGetAllSpots } from "../../store/spots";
import '../../index.css';

export default function Bookings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const bookingSelector = useSelector(state => state.bookings);
  const sessionUser = useSelector(state => state.session.user);
  const spotSelector = useSelector(state => state.spots);

  const [bookings, setBookings] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState('');
  const [spots, setSpots] = useState([]);
  const [spotId, setSpotId] = useState(0);

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])


  useEffect(() => {
    dispatch(thunkGetBookings())
  }, [dispatch])

  useEffect(() => {
    setBookings(Object.values(bookingSelector))
  }, [bookingSelector])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = {
      startDate: bookingStartDate,
      endDate: bookingEndDate,
      spotId,
      userId: sessionUser.id
    }
    await dispatch(thunkCreateBooking(newBooking))
    window.alert('Congratulations on your upcoming Vacation!')
    history.push(`/api/users/${sessionUser.id}`)
  }
  if (!bookingSelector) return null;
  return (
    <div>
      <div className="booking-page-container">
        <h1>Bookings</h1>
        <table className="bookings-table">
          <thead>
            <tr>
              <th>Booking Owner</th>
              <th>Booked Spot</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
          {
            bookings.map(booking => (
              <tbody key={booking.User && booking.id}>
                <tr>
                  <td>
                    <NavLink to={`/api/users/${booking.User && booking.User.id}`}>{booking.User && booking.User.username}</NavLink>
                  </td>
                  <td>{booking.Spot && booking.Spot.name}</td>
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                </tr>
              </tbody>

            ))
          }
        </table>
        {/* <section className="booking-form-container">
          {sessionUser && <form className="create-booking-form" onSubmit={handleSubmit}>
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
            <select placeholder="Choose a Spot" onChange={(e) => setSpotId(e.target.value)}>
              {
                spots && spots.map(spot => (
                  <option value={spot.id}>
                    {spot.name}
                  </option>
                ))
              }
            </select>
            <button type="submit">Create</button>
          </form>}
        </section> */}
      </div>
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

// <p>{typeof bookings}</p>
