import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { thunkGetBookings } from "../../store/bookings";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingSelector = useSelector(state => state.bookings);

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    dispatch(thunkGetBookings())
  }, [dispatch])

  useEffect(() => {
    setBookings(Object.values(bookingSelector))
  }, [bookingSelector])

  return (
    <div>
      <h1>Bookings</h1>
      {
        bookings.map(booking => (
          <div>
            <p>{booking.startDate}</p>
            <p>{booking.endDate}</p>
            <p>{booking.Spot.name}</p>
            <p>{booking.User.username}</p>
          </div>
        ))
      }

    </div>
  )
}
