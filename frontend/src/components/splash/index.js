import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllSpots } from "../../store/spots";
import './splash.css';
import '../../index.css';

export default function Splash() {

  const dispatch = useDispatch()

  const [spots, setSpots] = useState([])

  const spotSelector = useSelector(state => state.spots)

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  return(
    <>
      <div id="splash-main-content">
        <div id="navbar-links-container">
          <NavLink className='nav-images' id='boat-nav-image-container' to='/spots'>
            <img id="spots-nav-image" src={require('./boat_image_forNav.png')} alt='view all spots'></img>
          </NavLink>
          <NavLink className='nav-images' to='/bookings'>
            <img id="bookings-nav-image" src={require('./booking_image_forNav.jpg')} alt='view all bookings'></img>
          </NavLink>
          <NavLink className='nav-images' to='/users'>
            <img id="users-nav-image" src={require('./users_image_forNav.jpg')} alt='all users'></img>
          </NavLink>
        </div>
        <h1 id="main-title">Welcome to FloatBnB</h1>
        <div className='images-container'>
        {
          spots && spots.map(spot => (
            <div key={spot.id} className="splash-image-containers">
              <h2 className="splash-image-title">{spot.name}</h2>
              <NavLink to={`/spots/${spot.id}`}>
                <img id={`spot-image-${spot.id}`} src={spot.image} alt={``}/>
              </NavLink>
              <h3 className="splash-image-price">{`$${spot.price}/night`}</h3>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
