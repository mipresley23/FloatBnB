import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {thunkGetAllSpots, thunkCreateSpot} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";


export default function CreateSpot() {

  const dispatch = useDispatch();
  const history = useHistory()
  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [user, setUser] = useState('')
  const [marinaId, setMarinaId] = useState();

  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinaId(Object.values(marinaSelector))
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
    userId: user,
    marinaId: user
  }
 await dispatch(thunkCreateSpot(newSpot))
 history.replace('/api/spots')
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
        value={user}
        onChange={(e) => setUser(e.target.value)} />
      {/* <select onChange={(e) => setMarinaId(e.target.value)} value={marinaId}>
        {marinaId.map(marina => (
          <option key={marina.id}>{marina.name}</option>
          ))}
      </select> */}

      <h3>{}</h3>
      <button type="submit">Create new Spot</button>

    </form>
  </section>
);
};
