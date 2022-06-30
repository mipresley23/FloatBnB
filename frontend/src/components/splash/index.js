import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetImages } from "../../store/images";
import './splash.css';

export default function Splash() {

  const dispatch = useDispatch()
  const imageSelector = useSelector(state => state.images)
  const [images, setImages] = useState([])

  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setImages(imageSelector)
  }, [imageSelector])

  return(
    <div>
      <h1>Welcome to FloatBnB</h1>
      <NavLink to='/api/spots'>Spots</NavLink>
      <NavLink to='/api/bookings'>Bookings</NavLink>
      <NavLink to='/api/marinas'>Marinas</NavLink>
      <NavLink to='/api/users'>Users</NavLink>
      <div className='images-container'>
      {
        Object.values(images).map(image => (
          <div className="splash-image-containers">
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
