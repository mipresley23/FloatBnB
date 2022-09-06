import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { thunkGetAllSpots} from "../../store/spots";
import { thunkGetMarinas } from "../../store/marinas";
import CreateSpotFormModal from "../CreateSpotFormModal";
import './spots.css';
import '../../index.css';


export default function Spots() {

  const dispatch = useDispatch();

  const sessionUser = useSelector((state) => state.session.user);
  const spotSelector = useSelector(state => state.spots);
  const marinaSelector = useSelector(state => state.marinas);

  const [spots, setSpots] = useState([]);
  const [marinas, setMarinas] = useState([])

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


  if (!spotSelector) return null;
  return (
    <>
      <div className="spots-page-container">
        <div id="title-and-add-button">
        <h1 id="spots-page-title">Spots</h1>
        </div>
        <div className="spot-containers-container">
          {
            spots.map(spot => (
              <NavLink to={`/spots/${spot.id}`}>
                <div className="spot-card-containers">
                    <h2>{spot.name}</h2>
                    <h4>{`$${spot.price}/night`}</h4>
                </div>
              </NavLink>
            ))
          }
        </div>
          {sessionUser && <CreateSpotFormModal />}
      </div>
    </>
  )
}
