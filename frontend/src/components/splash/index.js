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


  console.log(images)
  console.log("newImages: ", newImages);

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
