import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import {thunkCreateSpot, thunkGetAllSpots} from "../../store/spots";
import { thunkGetImages } from "../../store/images";


export default function Spots() {

  const dispatch = useDispatch();

  const spotSelector = useSelector(state => state.spots);

  //const imageSelector = useSelector(state => state.images);




  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState(0);
  const [marinaId, setMarinaId] = useState(0);





  useEffect(() => {
    dispatch(thunkGetAllSpots())
    console.log('sent dispatch');
  }, [dispatch])

  // useEffect(() => {
  //   dispatch(thunkGetImages())
  // }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  // useEffect(() => {
  //   setImages(Object.values(imageSelector))
  // }, [imageSelector])

  // useEffect(() => {
  //   dispatch(thunkCreateSpot())
  //   console.log('create dispatch has been reached');
  // }, [dispatch])





const handleSubmit = async (e) => {
  e.preventDefault();
  const payload = {
    spotName,
    spotPrice,
    userId: 3,
    marinaId
  }
  const newSpot = await dispatch(thunkCreateSpot(payload))

}

  return (
    <div>
      <h1>Spots</h1>
      <div className="create_spot_constainer">

        <form onSubmit={handleSubmit}>
          <input
          type='text'
          value={spotName}
          onChange={(e) => setSpotName(e.target.value)}>
          </input>
          <input
          type='number'
          value={spotPrice}
          onChange={(e) => setSpotPrice(e.target.value)}>
          </input>
          <select onChange={setMarinaId}>
            {
              spots.map(spot => (
                <option key={spot.id}>{spot.Marina.id}</option>
              ))
            }
          </select>
          <button type="submit">Create</button>

        </form>
      </div>
      <div>
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
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWFjaHR8ZW58MHx8MHx8&w=1000&q=80" alt="boat"></img>
      </div>
    </div>
  )
}
