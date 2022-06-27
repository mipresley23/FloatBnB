import { csrfFetch } from "./csrf";

const GET_MARINAS = 'marinas/GET_MARINAS';

const actionGetMarinas = (marinas) => {
  return {
    type: GET_MARINAS,
    marinas
  }
}

export const thunkGetMarinas = () => async(dispatch) => {
  const res = await csrfFetch('/api/marinas');
  const marinas = await res.json();
  dispatch(actionGetMarinas(marinas));
  return marinas;
}

const marinaReducer = (state = {}, action) => {
  const newState = {...state}
  switch(action.type){
    case GET_MARINAS:
    action.marinas.forEach(marina => {
      newState[marina.id] = marina
    })
    return newState;

    default:
      return state;
  }
};

export default marinaReducer;
