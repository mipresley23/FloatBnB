import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import {thunkGetAllSpots} from "../../store/spots";


export default function Spots() {
  const  {spotId} = useParams();

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



  return (
    <div>
      <h1>Spots</h1>
      {
        spots.map(spot => (
          <p>{spot.name}</p>
        ))
      }
    </div>
  )
}
