import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { thunkGetImages } from "../../store/images";
import './splash.css';

export default function Splash() {

  const dispatch = useDispatch()
  const sessionUser = useSelector((state) => state.session.user);
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
      <div className='images-container'>
      {
        Object.values(images).map(image => (
          <div>
            <NavLink to={`/api/spots/${image.spotId}`}>
              <img id={`spot-image-${image.id}`} src={image.url} alt={``}/>
            </NavLink>
          </div>
          ))
      }
      </div>
    </div>
  )
}
