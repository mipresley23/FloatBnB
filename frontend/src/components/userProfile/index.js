import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {NavLink, useHistory, useParams} from 'react-router-dom'
import {thunkGetAllUsers} from "../../store/users";
import { thunkGetAllSpots, thunkDeleteSpot } from "../../store/spots";
import { thunkGetBookings, thunkDeleteBooking } from "../../store/bookings";
import EditSpotFormModal from "../EditSpotFormModal";
import '../../index.css';
import './userProfile.css';

export default function UserProfile() {
  const {id} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const [users, setUsers] = useState();
  const [spots, setSpots] = useState([])
  const [bookings, setBookings] = useState([])

  const userSelector = useSelector(state => state.users);
  const spotSelector = useSelector(state => state.spots);
  const bookingSelector = useSelector(state => state.bookings);
  const sessionUser = useSelector(state => state.session.user);

  const user = users && users.find(user => user.id === +id)
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

  const handleDeleteSpot = async(e) => {
    e.preventDefault();
    const matchBooks = bookings.filter(booking => booking.spotId === e.target.value)
    matchBooks && matchBooks.forEach((booking) => dispatch(thunkDeleteBooking(booking.id)))
    dispatch(thunkDeleteSpot(e.target.value))
    dispatch(thunkGetBookings())
    history.push(`/users/${user.id}`)
  }


  const handleDeleteBooking = async(e) => {
    await dispatch(thunkDeleteBooking(e.target.value))
    //matchingBooking && await dispatch(thunkDeleteBooking(matchingBooking.id))
    await dispatch(thunkGetBookings)
    setBookings(Object.values(bookingSelector))

    console.log(e.target.value)
  }




  const correctUser = () => {
    return sessionUser && sessionUser.id === +id;
  }
if(!bookingArray) return null;
if(!user) return null;
  return (
    <>
      <div id="profile-user-information">
        <div id="profile-name-image-container">
          <h2 id="profile-user-name">{user.username}</h2>
          <img id="profile-user-image" src={user.profileImage} alt={user.username}/>
        </div>
        <p id="profile-user-bio">{user.bio}</p>
      </div>
      {spotArray && spotArray.length > 0 ? <div id="user-spots-container">
        <h3 id="user-spots-header">Check out {user.username}'s Listings!</h3>
        {
          spotArray.map(spot => (
            <div id="each-user-spot-edit-container">
              <NavLink id="each-user-spot-container" to={`/spots/${spot.id}`}>
                <h4 id="each-user-spot-name">{spot.name}</h4>
                <img id="each-user-spot-image" src={spot.image} alt={spot.name}/>
                <p id="each-user-spot-price">${spot.price}/night</p>
              </NavLink>
            </div>
          ))
        }
      </div> : null}
      {sessionUser && sessionUser.id === user.id &&  <div id="user-bookings-container">
        <h3 id="user-bookings-header">{user.username}'s booked listings</h3>
        {
          bookingArray && bookingArray.length > 0 ? bookingArray.map(booking => (
            <div id="each-user-booking-container">
              <h3 id="booking-spot">{booking.Spot?.name}</h3>
              <img id="booking-image" src={booking.Spot?.image} alt=''/>
              <p id='booking-dates'>{booking.startDate} - {booking.endDate}</p>
             <button class='each-spot-buttons' type='button' value={booking.id} onClick={handleDeleteBooking}>Delete</button>
            </div>
          )) : <h3 id="no-bookings-message">{user.username} doesn't currently have any listings booked.</h3>
        }
      </div>}
    </>
  )
}
