import { csrfFetch } from "./csrf"

//type
const GET_USERS = 'users/getusers'
//action creator
const actionGetUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

//thunk
export const thunkGetAllUsers = () => async (dispatch) => {
  const res = await csrfFetch('/api/users');
  if(res.ok){
    const data = await res.json();
    dispatch(actionGetUsers(data))
    return res;
  } else {
    return await res.json()
  }
}
//reducer
const usersReducer = (state = {}, action) => {
  const newState = {...state}
  switch(action.type){
    case GET_USERS:

    action.users.forEach(user => {
      newState[user.id] = user
    })
    return newState;
    default:
      return state;
  }
};

export default usersReducer;
