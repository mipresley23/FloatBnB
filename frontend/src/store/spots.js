//define types

import { csrfFetch } from "./csrf"

//CREATE
const CREATE_SPOT = 'spots/createSpot'
//READ
const GET_SPOTS = 'spots/getSpots'
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
const actionUpdateSpot = (spot) => {
  return {
    type: UPDATE_SPOT,
    spot
  }
}
const actionDeleteSpot = (spot) => {
  return {
    type: DELETE_SPOT,
    spot
  }
}

//thunks
export const thunkGetAllSpots = (id) => async (dispatch) => {
  const res = await csrfFetch('/api/spots');
  const spots = await res.json();
  dispatch(actionGetSpots(spots));
  return res;
}

//reducers

const initialState = {
  spots: []
}

const spotReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SPOTS:
      const allSpots = {};
      action.spots.forEach(spot => {
        allSpots[spot.id] = spot;
      });
      return {
        ...allSpots,
        ...state
      }
    default:
      return state;
  }
};

export default spotReducer;
