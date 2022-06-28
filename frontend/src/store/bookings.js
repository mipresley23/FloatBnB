import { csrfFetch } from "./csrf"

//type
const GET_BOOKINGS = 'bookings/GET_BOOKINGS'
const CREATE_BOOKINGS = 'bookings/CREATE_BOOKINGS'
const DELETE_BOOKINGS = 'bookings/DELETE_BOOKINGS'

//action creator
const actionGetBookings = (bookings) => {
  return {
    type: GET_BOOKINGS,
    bookings
  }
}

const actionCreateBooking = (booking) => {
  return {
    type: CREATE_BOOKINGS,
    booking
  }
}

const actionDeleteBooking = (booking) => {
  return {
    type: DELETE_BOOKINGS,
    booking
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

export const thunkCreateBooking = (booking) => async (dispatch) => {
  const response = await csrfFetch("/api/bookings", {
    method: "POST",
    headers: {'Content-Type': "application/json"},
    body: JSON.stringify(booking)
  });
  if (response.ok){
    const newBooking = await response.json();
    dispatch(actionCreateBooking(newBooking));
    return newBooking;
  }
};

export const thunkDeleteBooking = (bookingId) => async(dispatch) => {
  const res = await csrfFetch(`/api/bookings/${bookingId}`, {
    method: "DELETE"
  })
  const data = await res.json();
  dispatch(actionDeleteBooking(data))
  return res;
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

    case CREATE_BOOKINGS:
      newState[action.booking.id] = action.booking
      return newState

    case DELETE_BOOKINGS:
      delete newState[action.booking.id]
      return newState;

    default:
      return state;
  }
};

export default bookingsReducer;
