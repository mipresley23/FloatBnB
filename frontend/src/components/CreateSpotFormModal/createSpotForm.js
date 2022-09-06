import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {thunkGetAllSpots, thunkCreateSpot} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";
import CloseButton from '../assets/close_x_icon.png';
import '../../context/ReviewModal.css';


export default function CreateSpotForm({setShowModal}) {

  const dispatch = useDispatch();
  const history = useHistory()
  const marinaSelector = useSelector(state => state.marinas);
  const sessionUser = useSelector((state) => state.session.user);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [spotImage, setSpotImage] = useState('');
  const [spotDescription, setSpotDescription] = useState('');
  const [marinas, setMarinas] = useState([]);
  const [marinaId, setMarinaId] = useState();

  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinas(Object.values(marinaSelector))
  }, [marinaSelector])


  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSpot = {
      name: spotName,
      price: spotPrice,
      image: spotImage,
      description: spotDescription,
      userId: sessionUser.id,
      marinaId
    }
    await dispatch(thunkCreateSpot(newSpot))
    setShowModal(false)
  }


return (
  <>
    <div id="create-spot-form-container">
    <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setShowModal(false)}><img id='review-modal-close-image' src={CloseButton} alt='x'/></button>
      <h2 id="create-spot-form-header">Create New Listing</h2>
      <form id='create-spot-form' onSubmit={handleSubmit}>
        <div className="create-spot-label-input-containers">
          <label id="create-spot-name-label" className="create-spot-form-labels required">Name</label>
          <input
            id="create-spot-form-name"
            className="create-spot-form-inputs"
            type="text"
            placeholder="Spot Name"
            required
            value={spotName}
            onChange={(e) => setSpotName(e.target.value)} />
        </div>
        <div className="create-spot-label-input-containers">
        <label id="create-spot-price-label" className="create-spot-form-labels required">Price</label>
        <input
          id="create-spot-form-price"
          className="create-spot-form-inputs"
          type="number"
          placeholder="Price"
          min="0"
          required
          value={spotPrice}
          onChange={(e) => setSpotPrice(e.target.value)} />
        </div>
        <div className="create-spot-label-input-containers">
        <label id="create-spot-image-label" className="create-spot-form-labels required">Image</label>
        <input
          id="create-spot-form-image"
          className="create-spot-form-inputs"
          type='text'
          placeholder="Image Url"
          required
          value={spotImage}
          onChange={(e) => setSpotImage(e.target.value)}/>
        </div>
        <div className="create-spot-label-input-containers">
          <label id="create-spot-description-label" className="create-spot-form-labels required">Description</label>
          <textarea
            id="create-spot-form-description"
            className="create-spot-form-inputs"
            placeholder="Description"
            required
            value={spotDescription}
            onChange={(e) => setSpotDescription(e.target.value)}/>
        </div>
        <div className="create-spot-label-input-containers">
          <label id="create-spot-marina-label" className="create-spot-form-labels required">Location</label>
          <select id='create-spot-form-marina' className="create-spot-form-inputs" placeholder="Choose a Marina" onChange={(e) => setMarinaId(e.target.value)}>
                  <option value=''>Select a Marina</option>
                  {
                    marinas && marinas.map(marina => (
                      <option value={marina.id}>
                        {marina.name}
                      </option>
                    ))
                  }
          </select>
        </div>
        <button id='create-spot-submit-button' type="submit">Create Spot</button>
      </form>
    </div>
  </>
);
};
