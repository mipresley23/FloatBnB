import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetAllSpots, thunkCreateSpot } from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";
import { thunkGetImages } from "../../store/images";

import './spots.css';
import '../../index.css';


export default function Spots() {

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);
  const imageSelector = useSelector(state => state.images);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState('');
  const [marinas, setMarinas] = useState([]);
  const [marinaId, setMarinaId] = useState(0);
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setImages(Object.values(imageSelector))
  }, [imageSelector])



  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinas(Object.values(marinaSelector))
  }, [marinaSelector])

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSpot = {
      name: spotName,
      price: spotPrice,
      userId: sessionUser.id,
      marinaId
    }
    await dispatch(thunkCreateSpot(newSpot))
  }

  if (!spotSelector) return null;
  return (
    <div>
      <div className="spots-page-container">
        <h1>Spots</h1>
        <div className="spot-containers-container">
          {
            spots.map(spot => (
              <NavLink to={`/api/spots/${spot.id}`}>
                <div className="spot-card-containers">
                    <h2>{spot.name}</h2>
                    <h4>{`$${spot.price}/night`}</h4>
                </div>
              </NavLink>
            ))
          }
        </div>
        <section className="spot-form-container">
          {sessionUser && <form className="create-spot-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Spot Name"
              defaultValue=''
              required
              value={spotName}
              onChange={(e) => setSpotName(e.target.value)} />
            <input
              type="number"
              placeholder="Price"
              min="0"
              defaultValue=''
              required
              value={spotPrice}
              onChange={(e) => setSpotPrice(e.target.value)} />
            <select placeholder="Choose a Marina" onChange={(e) => setMarinaId(e.target.value)}>
              <option value=''>Select a Marina</option>
              {
                marinas && marinas.map(marina => (
                  <option value={marina.id}>
                    {marina.name}
                  </option>
                ))
              }
            </select>
            <button type="submit">Create</button>
          </form>}
        </section>
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

//   <input
//   type='number'
//   placeholder="Marina Id"
//   required
//   value={marinaId.id}
//   onChange={(e) => setMarinaId(e.target.value)}
// />
