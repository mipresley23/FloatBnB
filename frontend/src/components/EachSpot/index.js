import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink} from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot, thunkGetAllSpots} from "../../store/spots";
import EditSpotFormModal from "../EditSpotFormModal";
import EditSpotForm from "../EditSpotFormModal/editSpotForm";
import { Modal } from "../../context/Modal";

export default function EachSpot() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch()
  const history = useHistory();

  const {id} = useParams()

  const [spot, setSpot] = useState({})

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(thunkDeleteSpot(id))
    history.push('/api/spots')
  }

  const handleReloadSpots = async (e) => {
    e.preventDefault();
    history.push('/api/spots');
    await dispatch(thunkGetAllSpots());
  }

const selectorEachSpot = useSelector(state => state.spot);

// //const [spot, setSpot] = useState(id);


  useEffect(() => {
    dispatch(thunkGetOneSpot(id))
  }, [dispatch])

  console.log(spot)
// useEffect(() => {
//   setSpot(Object.values(selectorEachSpot))
// }, [selectorEachSpot])

return(
  <div>
    <h1></h1>
    <button type="button" onClick={handleReloadSpots}>Back to Spots</button>
    <button id='editSpotModal' onClick={() => setShowModal(true)}>Edit this Spot</button>
      {showModal && (
      <Modal  onClose={() => setShowModal(false)}>
          <EditSpotForm />
        </Modal>)}
    <button type="button" onClick={handleDelete}>Delete Spot</button>
    <p></p>
  </div>
)

}
