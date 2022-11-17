import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetAllSpots } from "../../store/spots";
import './splash.css';
import '../../index.css';
import NoImage from '../assets/no-image-avail.png';
import BoatIcon from '../assets/boat_icon.png';
import MichiganIcon from '../assets/michigan_icon.png';
import CaliIcon from '../assets/california_icon.png';
import BCIcon from '../assets/BC_icon.png';
import FloridaIcon from '../assets/Florida_icon.png';
import LAIcon from '../assets/Louisiana_icon.png';
import OntarioIcon from '../assets/ontario.png';
import USVIslandsIcon from '../assets/US_Virgin_Islands_icon.png';
import WashingtonIcon from '../assets/WashingtonStateIcon.png';

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
        <div id="navbar-links-container-all">
          <div id="navbar-links-container-one">
            <NavLink className='nav-images' id='boat-nav-image-container' to='/spots'>
              <img className="state-icons" src={BoatIcon} alt='view all spots'></img>
              <p className='nav-image-label'>All Spots</p>
            </NavLink>
            <NavLink className='nav-images' to='/michigan'>
              <img className="state-icons" src={MichiganIcon} alt='Michigan'></img>
              <p className='nav-image-label'>Michigan</p>
            </NavLink>
            <NavLink className='nav-images' to='/california'>
              <img className="state-icons" src={CaliIcon} alt='California'></img>
              <p className='nav-image-label'>California</p>
            </NavLink>
            <NavLink className='nav-images' to='/britishcolumbia'>
              <img className="state-icons" src={BCIcon} alt='British Columbia'></img>
              <p className='nav-image-label'>British Columbia</p>
            </NavLink>
            <NavLink className='nav-images' to='/florida'>
              <img className="state-icons" src={FloridaIcon} alt='Florida'></img>
              <p className='nav-image-label'>Florida</p>
            </NavLink>
            <NavLink className='nav-images' to='/louisiana'>
              <img className="state-icons" src={LAIcon} alt='Louisiana'></img>
              <p className='nav-image-label'>Louisiana</p>
            </NavLink>
            <NavLink className='nav-images' to='/ontario'>
              <img className="state-icons" src={OntarioIcon} alt='Ontario'></img>
              <p className='nav-image-label'>Ontario</p>
            </NavLink>
            <NavLink className='nav-images' to='/usvirginislands'>
              <img className="state-icons" src={USVIslandsIcon} alt='US Virgin Islands'></img>
              <p className='nav-image-label'>US Virgin Islands</p>
            </NavLink>
            <NavLink className='nav-images' to='/washington'>
              <img className="state-icons" src={WashingtonIcon} alt='Washington'></img>
              <p className='nav-image-label'>Washington</p>
            </NavLink>
          </div>
        </div>
        <h1 id="main-title">Welcome to FloatBnB</h1>
        <div className='images-container'>
        {
          spots && spots.map(spot => (
            <div key={spot.id} className="splash-image-containers">
              <h2 className="splash-image-title">{spot.name}</h2>
              <NavLink to={`/spots/${spot.id}`}>
                <img id={`spot-image-${spot.id}`} src={spot.image ? spot.image : NoImage} alt={``}/>
              </NavLink>
              <h5 id="spot-address">{spot.Marina?.address} {spot.Marina?.city} {spot.Marina?.state}</h5>
                <h5 className="location-image-price">{`$${spot.price}/night`}</h5>
            </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
