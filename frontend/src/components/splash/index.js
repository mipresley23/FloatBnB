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
        <NavLink to='/api/spots'>Spots</NavLink>
        <NavLink to='/api/bookings'>Bookings</NavLink>
        <NavLink to='/api/marinas'>Marinas</NavLink>
        <NavLink to='/api/users'>Users</NavLink>
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
