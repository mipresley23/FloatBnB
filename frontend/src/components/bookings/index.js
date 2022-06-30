import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { thunkGetBookings, thunkCreateBooking} from "../../store/bookings";
import { thunkGetAllSpots } from "../../store/spots";

export default function Bookings() {
  const dispatch = useDispatch();
  const history = useHistory();

  const bookingSelector = useSelector(state => state.bookings);
  const sessionUser = useSelector(state => state.session.user);

  const [bookings, setBookings] = useState([]);
  const [bookingStartDate, setBookingStartDate] = useState('');
  const [bookingEndDate, setBookingEndDate] = useState('');
  const [spots, setSpots] = useState([]);
  const [user, setUser] = useState(0)


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
    userId: sessionUser.id
  }
  await dispatch(thunkCreateBooking(newBooking))
  history.push(`/api/bookings/`)
}
if(!bookingSelector) return null;
  return (
    <div>
      <h1>Bookings</h1>
        <section className="booking-form-container">
          {sessionUser && <form className="create-booking-form" onSubmit={handleSubmit}>
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
            value={spot}
            onChange={(e) => setUser(e.target.value)} />
          <button type="submit">Create new Booking</button>
        </form>}
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

// <p>{typeof bookings}</p>
