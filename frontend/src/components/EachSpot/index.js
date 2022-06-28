import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { thunkGetOneSpot } from "../../store/spots";
import Spots from "../spots";

export default function EachSpot() {
  const dispatch = useDispatch()

  const [spots, setSpots] = useState([])

  const spotSelector = useSelector(state => state.spots);

  const {spotId} = useParams()



  useEffect(() => {
    dispatch(thunkGetOneSpot(spotId))
  }, [spotId,dispatch])

useEffect(() => {
  setSpots(Object.values(spotSelector))
}, [spotSelector])

const spot = spots.find(spot => spot.id === spotId);

return(
  <div>
    <h1>{spot.id}</h1>
  </div>
)

}
