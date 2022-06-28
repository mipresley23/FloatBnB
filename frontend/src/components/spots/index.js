import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import {thunkGetAllSpots, thunkCreateSpot, thunkDeleteSpot} from "../../store/spots";


export default function Spots() {

  const dispatch = useDispatch();

  const spotSelector = useSelector(state => state.spots);
  const userSelector = useSelector(state => state.user);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [user, setUser] = useState('')
  const [marina, setMarina] = useState('');

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
    marina
  }
  const newSpot = await dispatch(thunkCreateSpot(payload))
  return newSpot;
}

const handleDelete = async (e) => {
  e.preventDefault()
  return await dispatch(thunkDeleteSpot())
}

  return (
    <div>
      <h1>Spots</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={spotName}
            onChange={(e) => setSpotName(e.target.value)}/>
          <input
            type='number'
            value={spotPrice}
            onChange={(e) => setSpotPrice(e.target.value)}/>
          <input
            type='number'
            value={user}
            onChange={(e) => setUser(e.target.value)}/>
          <button type="submit">Submit</button>
        </form>
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
              <td>{spot.name}</td>
              <td>{`$${spot.price}/night`}</td>
              <td>{spot.User.username}</td>
              <td>{spot.Marina.name}</td>
            </tr>
              <button type="button" onClick={handleDelete}>Delete Spot</button>

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
