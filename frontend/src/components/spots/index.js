import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetAllSpots, thunkCreateSpot } from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";

import './spots.css';


export default function Spots() {

  const dispatch = useDispatch();
  const history = useHistory();

  const sessionUser = useSelector((state) => state.session.user);
  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);

  const [spots, setSpots] = useState([]);
  const [spotName, setSpotName] = useState('');
  const [spotPrice, setSpotPrice] = useState('');
  const [marinas, setMarinas] = useState([]);
  const [marinaId, setMarinaId] = useState(0);
  console.log(marinas)

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
      name: spotName,
      price: spotPrice,
      userId: sessionUser.id,
      marinaId
    }
    await dispatch(thunkCreateSpot(newSpot))
    console.log(newSpot)
    // history.push(`/api/spots/${newSpot.id}`)
  }

  if (!spotSelector) return null;
  return (
    <div>
      <div className="spots-page-container">
        <h1>Spots</h1>
        <table className="spots-table">
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
              <tbody key={spot.User && spot.name}>
                <tr>
                  <td>
                    <NavLink to={`/api/spots/${spot.id}`}>{spot.name}</NavLink>
                  </td>
                  <td>{`$${spot.price}/night`}</td>
                  <td>{spot.User && spot.User.username}</td>
                  <td>{spot.Marina && spot.Marina.name}</td>
                </tr>
              </tbody>

            ))
          }
        </table>
        <section className="spot-form-container">
          {sessionUser && <form className="create-spot-form" onSubmit={handleSubmit}>
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
            <select placeholder="Choose a Marina" onChange={(e) => setMarinaId(e.target.value)}>
              {
                marinas && marinas.map(marina => (
                  <option value={marina.id}>
                    {marina.name}
                  </option>
                ))
              }
            </select>
            <button type="submit">Create</button>
          </form>}
        </section>
      </div>
    </div>
  )
}

//   <input
//   type='number'
//   placeholder="Marina Id"
//   required
//   value={marinaId.id}
//   onChange={(e) => setMarinaId(e.target.value)}
// />
