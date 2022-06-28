import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { thunkGetMarinas } from "../../store/marinas";
import {thunkGetAllSpots, thunkCreateSpot, thunkDeleteSpot} from "../../store/spots";


export default function Spots() {

  const dispatch = useDispatch();
  const history = useHistory()

  const spotSelector = useSelector(state => state.spots);
  const userSelector = useSelector(state => state.user);
  const marinaSelector = useSelector(state => state.marinas);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [user, setUser] = useState('')
  const [marina, setMarina] = useState('');
  const [marinaId, setMarinaId] = useState();

  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])


  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinaId(Object.values(marinaSelector))
  }, [marinaSelector])



const handleSubmit = async (e) => {
  e.preventDefault();
  const newSpot = {
    name: spotName,
    price: spotPrice,
    userId: user,
    marinaId: user
  }
 let createdSpot = await dispatch(thunkCreateSpot(newSpot))
 if(createdSpot) {
   history.push(`/api/spots/${createdSpot.id}`)
 }
}




  return (
    <div>
      <h1>Spots</h1>
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
        <table>
          <thead>
            <tr>
              <th>Spot Name</th>
              <th>Price</th>
              <th>Owned By</th>
              <th>Docked At</th>
            </tr>
          </thead>
      {
        spots.map(spot => (
          <tbody key={spot.name}>
            <tr>
              <td>
                <NavLink to={`/api/spots/${spot.id}`}>{spot.name}</NavLink>
              </td>
              <td>{`$${spot.price}/night`}</td>
              <td>{spot.User.username}</td>
              <td>{spot.Marina.name}</td>
            </tr>

          </tbody>
        ))
      }
      </table>
      <div>
        <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWFjaHR8ZW58MHx8MHx8&w=1000&q=80" alt="boat"></img>
      </div>
    </div>
  )
}
