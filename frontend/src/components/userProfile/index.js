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
  const spotArray = spots && spots.filter(spot => spot.userId === +id)
  const bookingArray = bookings && bookings.filter(booking => booking.userId === +id)



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
    <div className="main">
      <h1>{`${user && user.username}'s Profile`}</h1>
      <div className="users-spots-container">
        <h3>{`${user && user.username}'s spots`}</h3>
        {/* <img src="img.jpg" alt='profile picture'/> */}
        <table>
          <thead>
            <tr>
              <th>Spot</th>
              <th></th>
            </tr>
          </thead>
          {
            spotArray.map(spot => (
          <tbody>
            <tr>

              <td key={spot.id}>
                <NavLink to={`/api/spots/${spot.id}`}>{spot.name}</NavLink>
              </td>
                {sessionUser && correctUser() && <button id='profile-delete-spot-button' type="button" onClick={() => dispatch(thunkDeleteSpot(spot.id))}>Delete Spot</button>}
            </tr>
          </tbody>
              ))
            }
        </table>
      </div>
      <div className="users-bookings-container">
        <h3>{`${user && user.username}'s bookings`}</h3>
        {bookingArray && <table className="users-bookings-table">
          <thead>
            <tr>
              <th>Spot</th>
              <th>Start Date</th>
              <th>End Date</th>
            </tr>
          </thead>
            {bookingArray && bookingArray.map(booking => (
              <tbody>
                <tr>

                  <td>{booking.Spot && booking.Spot.name}</td>
                  <td>{booking.startDate}</td>
                  <td>{booking.endDate}</td>
                  <td>
                    {sessionUser && correctUser() && <button onClick={() => dispatch(thunkDeleteBooking(booking.id))}>Delete Booking</button>}
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
          }
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
