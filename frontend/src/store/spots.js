//define types

import { csrfFetch } from "./csrf"

//CREATE
const CREATE_SPOT = 'spots/createSpot'
//READ
const GET_SPOTS = 'spots/getSpots'
const GET_ONE_SPOT = 'spots/getOneSpot'
//UPDATE
const UPDATE_SPOT = 'spots/updateSpot'
//DELETE
const DELETE_SPOT = 'spots/deleteSpot'
//action creators
const actionCreateSpot = (spot) => {
  return {
    type: CREATE_SPOT,
    spot
  }
}
const actionGetSpots = (spots) => {
  return {
    type: GET_SPOTS,
    spots
  }
}

const actionGetOneSpot = (spot) => {
  return {
    type: GET_ONE_SPOT,
    spot
  }
}
const actionUpdateSpot = (spot) => {
  return {
    type: UPDATE_SPOT,
    spot
  }
}
const actionDeleteSpot = (spot, booking) => {
  return {
    type: DELETE_SPOT,
    spot
  }
}

//thunks
export const thunkGetAllSpots = (spots) => async (dispatch) => {
  const res = await csrfFetch('/api/spots');
  const spots = await res.json();
  dispatch(actionGetSpots(spots));
  return res;
}

// export const thunkGetOneSpot = (spotId) => async (dispatch) => {
//   const res = await csrfFetch(`/api/spots/${spotId}`);
//   const data = await res.json();
//   dispatch(actionGetOneSpot(data));
//   return data;
// }

export const thunkCreateSpot = (spot) => async (dispatch) => {
  const response = await csrfFetch("/api/spots", {
    method: "POST",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify(spot)
  });
  if (response.ok) {
    const newSpot = await response.json();
    dispatch(actionCreateSpot(newSpot));
    return response;
  }else{
    const error = await response.json();
    return error;
  }
};

export const thunkEditSpot = (spot, spotId) => async (dispatch) => {
  const { name, price, image, description, userId, marinaId } = spot;
  const res = await csrfFetch(`/api/spots/${spot.id}`, {
    method: "PUT",
    body: JSON.stringify({
      name,
      price,
      image,
      description,
      userId,
      marinaId
    })
  })
  const data = await res.json();
  dispatch(actionUpdateSpot(data))
  return res;
}

export const thunkDeleteSpot = (spotId) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${spotId}`, {
    method: "DELETE"
  })
  const data = await res.json();
  console.log('fetch delete data: ', data)
  dispatch(actionDeleteSpot(data))
  return res;
}

//reducers


const spotReducer = (state = {}, action) => {
  let newState = { ...state }
  switch (action.type) {
    case GET_SPOTS:
      action.spots.forEach(spot => {
        newState[spot.id] = spot
      })
      return newState;

    case GET_ONE_SPOT:
      newState[action.spot.id] = action.spot
      return newState;

    case CREATE_SPOT:
      newState[action.spot.id] = action.spot
      return newState

    case UPDATE_SPOT:
      newState[action.spot.id] = action.spot
      return newState

      case DELETE_SPOT:
      const deleteSpotId = action.spot.id;
      delete newState[deleteSpotId]
      // delete newState[bookings.id[Spot.deleteSpotId]]
      return newState;

    default:
      return state;
  }
};

export default spotReducer;
