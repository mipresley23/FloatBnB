import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";
import CloseButton from '../assets/close_x_icon.png';
import '../spots/spots.css';


export default function EditSpotForm({spot, setShowModal}) {
  const {id} = useParams();

  const dispatch = useDispatch();
  const history = useHistory()
  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);
  const sessionUser = useSelector(state => state)

  const [spots, setSpots] = useState([]);
  const [marinas, setMarinas] = useState([]);
  const [spotName, setSpotName] = useState(spot?.name);
  const [spotPrice, setSpotPrice] = useState(spot?.price);
  const [spotImage, setSpotImage] = useState(spot?.image)
  const [spotDescription, setSpotDescription] = useState(spot?.description)
  const [marinaId, setMarinaId] = useState(spot?.marinaId);
  const [errors, setErrors] = useState([]);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    const errors = []
    if(!spotName) errors.push("Name is required.")
    if(!spotPrice) errors.push("Price is required.")
    if(!spotImage) errors.push("Image is required.")
    if(!spotDescription) errors.push("Description is required.")
    if(!marinaId) errors.push("Please choose a marina.")
    if(spotName.length > 100) errors.push("Name must be 100 characters or less.")
    if(spotPrice < 1) errors.push('Price must be a positive amount.')
    if(spotImage.length > 2000) errors.push('Image Url must be 2000 characters or less.')
    if(spotDescription.length > 1000) errors.push('Description must be 1000 characters or less.')
    // if(spotImage && (!spotImage.endsWith('.jpg') || !spotImage.endsWith('.jpeg') || spotImage.endsWith('.png'))) errors.push('Image must be a jpg, jpeg, or png.')
    setErrors(errors)
  }, [spotName, spotPrice, spotImage, spotDescription, marinaId])

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
      id: id,
      name: spotName,
      price: spotPrice,
      image: spotImage,
      description: spotDescription,
      userId: sessionUser.id,
      marinaId
    }
    if(!errors.length){
      await dispatch(thunkEditSpot(newSpot))
      setShowModal(false);
    }
  }


return (
  <>
    <div id="create-spot-form-container">
    {showErrors && <ul id="errors-list">
          {errors.map((error, idx) => <li key={idx}>{error}</li>)}
        </ul>}
    <button className='modal-cancel-buttons' id='signup-cancel-button' onClick={() => setShowModal(false)}><img id='review-modal-close-image' src={CloseButton} alt='x'/></button>
      <h2 id="create-spot-form-header">Edit {spot.name}</h2>
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
          <select id='create-spot-form-marina' value={marinaId}className="create-spot-form-inputs" placeholder="Choose a Marina" onChange={(e) => setMarinaId(e.target.value)}>
                  <option>Select a Marina</option>
                  {
                    marinas && marinas.map(marina => (
                      <option value={marina.id}>
                        {marina.name}
                      </option>
                    ))
                  }
          </select>
        </div>
        <button id='create-spot-submit-button' onClick={() => setShowErrors(true)} type="submit">Edit Spot</button>
      </form>
    </div>
  </>
);
};
