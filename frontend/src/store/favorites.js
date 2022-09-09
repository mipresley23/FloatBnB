import { csrfFetch } from "./csrf";

const GET_FAVORITES = 'favorites/GET_FAVORITES'
const ADD_FAVORITE = 'favorites/ADD_FAVORITE'
const DELETE_FAVORITE = 'favorites/DELETE_FAVORITE'

const actionGetFavorites = (favorites) => {
  return {
    type: GET_FAVORITES,
    favorites
  }
}

const actionAddFavorite = (favorite) => {
  return {
    type: ADD_FAVORITE,
    favorite
  }
}

const actionDeleteFavorite = (favoriteId) => {
  return {
    type: DELETE_FAVORITE,
    favoriteId
  }
}

export const thunkGetFavorites = (favorites) => async (dispatch) => {
  const res = await csrfFetch('/api/favorites');
  const favorites = await res.json();
  dispatch(actionGetFavorites(favorites));
  return res;
}

export const thunkAddFavorite = (favorite) => async (dispatch) => {
  const res = await csrfFetch('/api/favorites', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(favorite)
  });
  if(res.ok) {
    const favorite = await res.json();
    dispatch(actionAddFavorite(favorite));
    return res;
  }
}

export const thunkDeleteFavorite = (favoriteId) => async(dispatch) => {
  const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
    method: "DELETE"
  })
  const data = await res.json();
  dispatch(actionDeleteFavorite(data))
  return res;
}

const favoriteReducer = (state = {}, action) => {
  const newState = {...state}
  switch(action.type) {
    case GET_FAVORITES:
      action.favorites.forEach(favorite => {
        newState[favorite.id] = favorite
      })
      return newState;

    case ADD_FAVORITE:
      newState[action.favorite.id] = action.favorite
      return newState;

    case DELETE_FAVORITE:
      delete newState[action.favoriteId]
      return newState

    default:
      return state;

  }
}

export default favoriteReducer;
