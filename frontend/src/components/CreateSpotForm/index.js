import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import {thunkGetAllSpots, thunkCreateSpot} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";


export default function CreateSpot() {

  const dispatch = useDispatch();

  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [user, setUser] = useState('')
  const [marinas, setMarinas] = useState('');

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
  const payload = {
    spotName,
    spotPrice,
    user,
    marinas
  }
 await dispatch(thunkCreateSpot(payload))
}


return (
  <section className="spot-form-container">
    <form className="create-spot-form" onSubmit={handleSubmit}>
      <input
        type="test"
        placeholder="Spot Name"
        required
        value={spotName}
        onChange={(e) => setSpotName(e.target.value)} />
      <input
        type="number"
        placeholder="Price"
        min="0"
        required
        value={spotPrice}
        onChange={(e) => setSpotPrice(e.target.value)} />
      <input
        type="text"
        placeholder="Owner"
        value={user.username}
        onChange={setUser} />
      {/* <select onChange={(e) => setMarinas(e.target.value)} value={marinas}>
        {marinas.map(marina =>
          <option key={marina.id}>{marina.name}</option>
        )}
      </select> */}
      <button type="submit">Create new Spot</button>
      <p>{typeof marinaSelector}</p>
    </form>
  </section>
);
};
