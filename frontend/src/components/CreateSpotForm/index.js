// import { useEffect, useState } from "react"
// import { useDispatch } from "react-redux";
// import {useHistory} from 'react-router-dom'
// import { thunkCreateSpot } from "../../store/spots"

// export default function NewSpot() {
//   const history = useHistory();
//   const dispatch = useDispatch();

//   const [spotName, setSpotName] = useState('');
//   const [spotPrice, setSpotPrice] = useState(0);


//   const updateName = (e) => setSpotName(e.target.value);
//   const updatePrice = (e) => setSpotPrice(e.target.value);

//   const handleSubmit = async() => {
//     const payload = {
//       spotName,
//       spotPrice,
//       userId,
//       marinaId
//     }
//     history.redirect('/api/spots')
//     return await dispatch(thunkCreateSpot(payload));
//   }


//   return(
//     <div>
//         <h1>Create New Spot</h1>
//         {/* <div className="create_spot_constainer"> */}

//         <form onSubmit={handleSubmit}>
//           <input
//           type='text'
//           value={spotName}
//           onChange={updateName}>
//           </input>
//           <input
//           type='number'
//           value={spotPrice}
//           onChange={updatePrice}>
//           </input>
//           {/* <select onChange={setMarinaId}>
//             {
//               spots.map(spot => (
//                 <option key={spot.id}>{spot.Marina.id}</option>
//               ))
//             }
//           </select> */}
//           <button type="submit">Create</button>

//         </form>
//     </div>
//   )
// }
