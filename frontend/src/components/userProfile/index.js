import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useParams} from 'react-router-dom'
import {thunkGetAllUsers} from "../../store/users";
import { thunkGetAllSpots, thunkDeleteSpot } from "../../store/spots";
import { thunkGetBookings, thunkDeleteBooking } from "../../store/bookings";

export default function UserProfile() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const [users, setUsers] = useState();
  const [spots, setSpots] = useState([])
  const [bookings, setBookings] = useState([])

  const userSelector = useSelector(state => state.users);
  const spotSelector = useSelector(state => state.spots);
  const bookingSelector = useSelector(state => state.bookings);
  const sessionUser = useSelector(state => state.session.user);

  const user = users && users.find(user => user.id === +id)
  const spotArray = spots && spots.filter(spot => spot.userId === +id)
  const bookingArray = bookings && bookings.filter(booking => booking.userId === +id)
  console.log(spotArray)


  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  },[spotSelector])


  useEffect(() => {
    dispatch(thunkGetAllUsers())
  }, [dispatch])

  useEffect(() => {
    setUsers(Object.values(userSelector))
  }, [userSelector])

  useEffect(() => {
    dispatch(thunkGetBookings())
  }, [dispatch])

  useEffect(() => {
    setBookings(Object.values(bookingSelector))
  }, [bookingSelector])

  const correctUser = () => {
    return sessionUser && sessionUser.id === +id;
  }

  return (
    <div>
      <h1>{`${user && user.username}'s Profile`}</h1>
      <div className="users-spots-container">
        <h3>{`${user && user.username}'s spots`}</h3>
        <ul>
          {
            spotArray.map(spot => (
              <li key={spot.id}>{spot.name}</li>
              ))
            }
        </ul>
      </div>
      <div className="users-bookings-container">
        <h3>{`${user && user.username}'s bookings`}</h3>
        <ul>
          {
            bookingArray && bookingArray.map(booking => (
              <div>
                <li>{booking.Spot && booking.Spot.name}</li>
                <li>{booking.startDate}</li>
                <li>{booking.endDate}</li>
                <li>
                  {sessionUser && correctUser() && <button onClick={() => dispatch(thunkDeleteBooking(booking.id))}>Delete Booking</button>}
                </li>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}
