import React, { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink} from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import EditSpotFormModal from "../EditSpotFormModal";
import EditSpotForm from "../EditSpotFormModal/editSpotForm";
import { Modal } from "../../context/Modal";
import { thunkGetImages } from "../../store/images";

export default function EachSpot() {
  const dispatch = useDispatch()
  const history = useHistory();
  const {id} = useParams()

  // const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [spotName, setSpotName] = useState();
  const [spotPrice, setSpotPrice] = useState(null);
  const [spots, setSpots] = useState([]);
  const [images, setImages] = useState([]);


  const spotSelector = useSelector(state => state.spots);
  const imageSelector = useSelector(state => state.images);
  const sessionUser =  useSelector(state => state.session.user);

  const spot = spots.find(spot => spot.id === +id);
  const image = images.find(image => image.id === +id);

  const correctUser = () => {
    return sessionUser && spot && sessionUser.id === spot.userId;
  }

  console.log(correctUser())



  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])


  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setImages(Object.values(imageSelector))
  }, [imageSelector])

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(thunkDeleteSpot(id))
    history.push('/api/spots')
  }

  const handleReloadSpots = (e) => {
    e.preventDefault();
    history.push('/api/spots');;
  }

  useEffect(() => {
    dispatch(thunkGetOneSpot(id))
  }, [dispatch, id])

    // useEffect(() => {
    //   setSpot(Object.values(selectorEachSpot))
    // }, [selectorEachSpot])

const selectorEachSpot = useSelector(state => state.spot);

const handleSubmit = async (e) => {
  e.preventDefault();
  const newSpot = {
    id: id,
    name: spotName,
    price: spotPrice,
    userId: sessionUser.id,
    marinaId: spot.marinaId
  }
  await dispatch(thunkEditSpot(newSpot))
  // history.push(`/api/spots/${+id}`)
  setShowForm(false);
}

if(!spot) return null;
if(!images) return null;

return(
  <div>
    <div className="each-spot-card">
      <h1>{spot.name}</h1>
      <img src={image && image.url} alt="spot image"></img>
      <p>{`$${spot.price}/night`}</p>
    </div>
    <button type="button" onClick={handleReloadSpots}>Back to Spots</button>
    {sessionUser && correctUser() && <div><button type="button" onClick={() => setShowForm(true)}>Edit this Spot</button>
    <button type="button" onClick={handleDelete}>Delete Spot</button></div>}
    <section className="edit-spot-form-container">
    {showForm && <form className="edit-spot-form" onSubmit={handleSubmit}>
      <input
        type="test"
        placeholder={spotName}
        required
        value={spotName}
        onChange={(e) => setSpotName(e.target.value)} />
      <input
        type="number"
        placeholder={spotPrice}
        min="0"
        required
        value={spotPrice}
        onChange={(e) => setSpotPrice(e.target.value)} />

      {/* <select onChange={(e) => setMarinaId(e.target.value)} value={marinaId}>
        {marinaId.map(marina => (
          <option key={marina.id}>{marina.name}</option>
          ))}
      </select> */}
      <button type="submit">Edit this Spot</button>
      <button type="button" onClick={() => setShowForm(false)}>Cancel</button>

    </form>}
  </section>
  </div>
)

}

{/* <button id='editSpotModal' onClick={() => setShowModal(true)}>Edit this Spot</button>
  {showModal && (
  <Modal  onClose={() => setShowModal(false)}>
      <EditSpotForm />
    </Modal>)}
 */}
