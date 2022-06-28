import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { thunkGetOneSpot, thunkDeleteSpot} from "../../store/spots";

export default function EachSpot() {
  const dispatch = useDispatch()
  const history = useHistory();

  const {id} = useParams()

  const [spot, setSpot] = useState({})

  const handleDelete = async (e) => {
    e.preventDefault()
    await dispatch(thunkDeleteSpot(id))
    history.push('/api/spots')
  }

//   //const selectorEachSpot = useSelector(state => state.spot);

// //const [spot, setSpot] = useState(id);


  useEffect(() => {
    setSpot(dispatch(thunkGetOneSpot(id)))
  }, [dispatch])

// useEffect(() => {
//   setSpot(Object.values(spot))
// }, [spot])

return(
  <div>
    <h1>Spot</h1>
    <button type="button" onClick={handleDelete}>Delete Spot</button>
    <p></p>
  </div>
)

}
