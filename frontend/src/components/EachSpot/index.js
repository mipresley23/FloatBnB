import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, NavLink} from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot} from "../../store/spots";
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

//   //const selectorEachSpot = useSelector(state => state.spot);

// //const [spot, setSpot] = useState(id);


  useEffect(() => {
    setSpot(dispatch(thunkGetOneSpot(id)))
  }, [dispatch])

// useEffect(() => {
//   setSpot(Object.values(spot))
// }, [spot])

return(
  <div>
    <h1>Spot</h1>
    <NavLink to='/api/spots'>Back to Spots</NavLink>
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
