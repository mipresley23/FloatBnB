import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetAllSpots} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";
import CreateSpotFormModal from "../CreateSpotFormModal";

export default function WashingtonSpots() {

  const dispatch = useDispatch()

  const [spots, setSpots] = useState([]);

  const spotSelector = useSelector(state => state.spots)

  const washingtonSpots = spots && spots.filter(spot => spot.marinaId === 6)


  useEffect(() => {
    dispatch(thunkGetAllSpots())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  console.log(spots)

  return(
    <>
      <div id="splash-main-content">
        <h2 id="main-title">Washington Spots</h2>
        <div className='images-container'>
          {
            washingtonSpots && washingtonSpots.map(spot => (
              <div key={spot.id} className="splash-image-containers">
                <h2 className="splash-image-title">{spot.name}</h2>
                <NavLink to={`/spots/${spot.id}`}>
                  <img id={`spot-image-${spot.id}`} src={spot.image} alt={``}/>
                </NavLink>
                <h5 id="spot-address">{spot.Marina?.address} {spot.Marina?.city} {spot.Marina?.state}</h5>
                <h5 className="location-image-price">{`$${spot.price}/night`}</h5>
              </div>
              ))
            }
        </div>
      </div>
    </>
  )
}
