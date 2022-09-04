import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useParams} from 'react-router-dom'
import {thunkGetAllUsers} from "../../store/users";
import { thunkGetAllSpots, thunkDeleteSpot } from "../../store/spots";
import { thunkGetBookings, thunkDeleteBooking } from "../../store/bookings";
import '../../index.css';
import './userProfile.css';

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
  console.log('user: ', user)
  const spotArray = spots && spots.filter(spot => spot.userId === +id)



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

  const bookingArray = bookings && bookings.filter(booking => booking.userId === +id)



  const handleDelete = async(e) => {
    const matchingBookings = bookings && bookings.filter(booking => booking.spotId === +e.target.value)
    console.log('match: ', matchingBookings)
    matchingBookings && matchingBookings.forEach((booking) => dispatch(thunkDeleteBooking(booking.id)))
    //matchingBooking && await dispatch(thunkDeleteBooking(matchingBooking.id))
    await dispatch(thunkDeleteSpot(e.target.value))
    await dispatch(thunkGetBookings)
    await dispatch(thunkGetAllSpots)

    console.log(e.target.value)
  }
console.log('bookings: ', bookings);
console.log('bookingArray', bookingArray);



  const correctUser = () => {
    return sessionUser && sessionUser.id === +id;
  }
if(!bookingArray) return null;
  return (
    <>
      <div id="profile-user-information">
        <h2 id="profile-user-name">{user.username}</h2>
        <img id="profile-user-image" src={user.profileImage} alt={user.username}/>
        <p id="profile-user-bio">{user.bio}</p>
      </div>
    </>
  )
}
