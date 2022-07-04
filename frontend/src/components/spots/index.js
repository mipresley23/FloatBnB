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
  const [showCreateSpotForm, setShowCreateSpotForm] = useState(false);

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
    setShowCreateSpotForm(false)
  }

  if (!spotSelector) return null;
  return (
    <div>
      <div className="spots-page-container">
        <div id="title-and-add-button">
        <h1>Spots</h1>
        {sessionUser && !showCreateSpotForm && <button id='show-create-spot-button' type="button" onClick={() => setShowCreateSpotForm(true)}>+</button>}
        </div>
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

          {sessionUser && showCreateSpotForm && <form className="create-spot-form" onSubmit={handleSubmit}>
            <input id="spot-name-input"
              type="text"
              placeholder="New Spot Name"
              defaultValue=''
              required
              value={spotName}
              onChange={(e) => setSpotName(e.target.value)} />
            <input id="spot-price-input"
              type="number"
              placeholder="Spot Price"
              min="0"
              defaultValue=''
              required
              value={spotPrice}
              onChange={(e) => setSpotPrice(e.target.value)} />
            <select id='spot-marina-input' placeholder="Choose a Marina" onChange={(e) => setMarinaId(e.target.value)}>
              <option value=''>Select a Marina</option>
              {
                marinas && marinas.map(marina => (
                  <option value={marina.id}>
                    {marina.name}
                  </option>
                ))
              }
            </select>
            <button id='create-spot-button' type="submit">Create</button>
            <button id='cancel-spot-form-button' type="button" onClick={() => setShowCreateSpotForm(false)}>Cancel</button>
          </form>}
        </section>
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
