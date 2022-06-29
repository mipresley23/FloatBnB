import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {thunkGetAllSpots, thunkDeleteSpot} from "../../store/spots";

import './spots.css';


export default function Spots() {

  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spotSelector = useSelector(state => state.spots);

  const [spots, setSpots] = useState([]);
  const [showSpots, setShowSpots] = useState(false)


  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  if(!spotSelector) return null;
  return (
    <div>
     {spots && <div>
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
            <tbody key={spot && spot.name}>
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
      </div>}
    </div>
  )
}
// {sessionUser && <button key={spot.id} type="button" onClick={() => dispatch(thunkDeleteSpot(spot.id))}>Delete</button>}
