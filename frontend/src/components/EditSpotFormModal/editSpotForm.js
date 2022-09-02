// import { useState,useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux";
// import { useHistory, useParams } from "react-router-dom";
// import {thunkGetAllSpots, thunkEditSpot} from "../../store/spots";
// import { thunkGetMarinas } from "../../store/marinas";
// import '../spots/spots.css';


// export default function EditSpotForm() {
//   const {id} = useParams();

//   const dispatch = useDispatch();
//   const history = useHistory()
//   const spotSelector = useSelector(state => state.spots);
//   const marinaSelector = useSelector(state => state.marinas);
//   const sessionUser = useSelector(state => state)

//   const [spots, setSpots] = useState([]);
//   const [spotName, setSpotName] = useState();
//   const [spotPrice, setSpotPrice] = useState(null);
//   const [user, setUser] = useState('')
//   const [marinaId, setMarinaId] = useState();
//   const [showForm, setShowForm] = useState(true);

//   useEffect(() => {
//     dispatch(thunkGetMarinas())
//   }, [dispatch])

//   useEffect(() => {
//     setMarinaId(Object.values(marinaSelector))
//   }, [marinaSelector])

//   useEffect(() => {
//     dispatch(thunkGetAllSpots())
//   }, [dispatch])


//   useEffect(() => {
//     setSpots(Object.values(spotSelector))
//   }, [spotSelector])

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newSpot = {
//       id: id,
//       name: spotName,
//       price: spotPrice,
//       userId: 1,
//       marinaId: 3
//     }
//     await dispatch(thunkEditSpot(newSpot))
//     history.push(`/spots/${+id}`)
//     setShowForm(false);
//   }


// return (
//   <section className="edit-spot-form-container">
//     {showForm && <form className="edit-spot-form" onSubmit={handleSubmit}>
//       <input
//         type="test"
//         placeholder={spotName}
//         required
//         value={spotName}
//         onChange={(e) => setSpotName(e.target.value)} />
//       <input
//         type="number"
//         placeholder={spotPrice}
//         min="0"
//         required
//         value={spotPrice}
//         onChange={(e) => setSpotPrice(e.target.value)} />

//       {/* <select onChange={(e) => setMarinaId(e.target.value)} value={marinaId}>
//         {marinaId.map(marina => (
//           <option key={marina.id}>{marina.name}</option>
//           ))}
//       </select> */}
//       <button type="submit">Edit this Spot</button>

//     </form>}
//   </section>
// );
// };
