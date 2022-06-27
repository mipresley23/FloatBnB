import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";

import {thunkGetAllSpots} from "../../store/spots";


export default function Spots() {

  const dispatch = useDispatch();

  const spotSelector = useSelector(state => state.spots);

  const [spots, setSpots] = useState([]);


  useEffect(() => {
    dispatch(thunkGetAllSpots())
    console.log('sent dispatch');
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const payload = {
//     spotName,
//     spotPrice,
//     userId: 3,
//     marinaId
//   }
//   const newSpot = await dispatch(thunkCreateSpot(payload))
// }

  return (
    <div>
      <h1>Spots</h1>
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
