import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetBookings, thunkCreateBooking } from "../../store/bookings";
import { thunkGetAllSpots } from "../../store/spots";

export default function Bookings() {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingSelector = useSelector(state => state.bookings);
  const spotSelector = useSelector(state => state.spots)

  const [bookings, setBookings] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState(null);
  const [bookingEndDate, setBookingEndDate] = useState(null);
  const [user, setUser] = useState('')
  const [spotId, setSpotId] = useState(0)

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpotId(Object.values(spotSelector))
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
      spotId: 1,
      userId: user
    }
   let createdBooking = await dispatch(thunkCreateBooking(newBooking))
   if(createdBooking) {
     history.push(`/api/bookings/`)
   }
  }

  return (
    <div>
      <h1>Bookings</h1>
        <section className="booking-form-container">
          <form className="create-booking-form" onSubmit={handleSubmit}>
            <input
              type="date"
              placeholder="Booking Start Date"
              required
              value={bookingStartDate}
              onChange={(e) => setBookingStartDate(e.target.value)} />
            <input
              type="date"
              placeholder="Booking End Date"
              required
              value={bookingEndDate}
              onChange={(e) => setBookingEndDate(e.target.value)} />
            <input
              type="number"
              placeholder="Booked by"
              value={user}
              onChange={(e) => setUser(e.target.value)} />
            {/* <select value={spotId} onChange={setSpotId}> */}
              {
                Object.values(spotId).map(spot => (
                  // <option value={}>{spot.name}</option>
                  <input type='radio' value={spot.name} name='spots' checked={spot.name === true} onChange={(e) => setSpotId(e.target.value)}/>
                ))
              }
            {/* </select> */}

            <h3>{}</h3>
            <button type="submit">Create new Booking</button>

          </form>
      </section>
        <table>
          <thead>
            <tr>
              <th>Booking Owner</th>
              <th>Booked Spot</th>
              <th>Booking Start Date</th>
              <th>Booking End Date</th>
            </tr>
          </thead>
      {
        bookings.map(booking => (
          <tbody key={booking.name}>
            <tr>
              <td>{booking.User.username}</td>
              <td>{booking.Spot.name}</td>
              <td>{booking.startDate}</td>
              <td>{booking.endDate}</td>
            </tr>

          </tbody>
        ))
      }
      </table>

    </div>
  )
}
