import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetImages } from "../../store/images";
import './splash.css';
import '../../index.css';

export default function Splash() {

  const dispatch = useDispatch()
  const imageSelector = useSelector(state => state.images)
  const [images, setImages] = useState('')

  const newImages = []
  for(let i = 0; i < images.length - 1; i++){
    newImages.push(images[i]);
  }

  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setImages(Object.values(imageSelector))
  }, [imageSelector])

  return(
    <div>
      <div id="navbar-links-container">
        <NavLink className='nav-images' id='boat-nav-image-container' to='/api/spots'>
          <img id="spots-nav-image" src={require('./boat_image_forNav.png')} alt='view all spots'></img>
        </NavLink>
        <NavLink className='nav-images' to='/api/bookings'>
          <img id="bookings-nav-image" src={require('./booking_image_forNav.jpg')} alt='view all bookings'></img>
        </NavLink>
        <NavLink className='nav-images' to='/api/users'>
          <img id="users-nav-image" src={require('./users_image_forNav.jpg')} alt='all users'></img>
        </NavLink>
      </div>
      <h1 id="main-title">Welcome to FloatBnB</h1>
      <div className='images-container'>
      {
        newImages.map(image => (
          <div key={image.id} className="splash-image-containers">
            <h2 className="splash-image-title">{image.Spot && image.Spot.name}</h2>
            <NavLink to={`/api/spots/${image.spotId}`}>
              <img id={`spot-image-${image.id}`} src={image.url} alt={``}/>
            </NavLink>
            <h3 className="splash-image-price">{image.Spot && `$${image.Spot.price}/night`}</h3>
          </div>
          ))
      }
      </div>
    </div>
  )
}
