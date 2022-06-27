import { csrfFetch } from "./csrf"

//type
const GET_BOOKINGS = 'bookings/GET_BOOKINGS'
//action creator
const actionGetBookings = (bookings) => {
  return {
    type: GET_BOOKINGS,
    bookings
  }
}


//thunks

export const thunkGetBookings = (bookings) => async(dispatch) => {
  const res = await csrfFetch('/api/bookings');
  if(res.ok){
    const bookings = await res.json();
    dispatch(actionGetBookings(bookings));
    return res;
  } else {
    return await res.json();
  }
}

//reducer
const bookingsReducer = (state = {}, action) => {
  const newState = {...state}
  switch(action.type){
    case GET_BOOKINGS:
    action.bookings.forEach(booking => {
      newState[booking.id] = booking
    })
    return newState;

    default:
      return state;
  }
};

export default bookingsReducer;
