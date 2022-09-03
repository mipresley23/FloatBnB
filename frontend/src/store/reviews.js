import { csrfFetch } from "./csrf";

const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const actionCreateReview = (review) => {
  return {
    type: CREATE_REVIEW,
    review
  }
}

const actionGetReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews
  }
}

const actionUpdateReview = (review) => {
  return {
    type: UPDATE_REVIEW,
    review
  }
}

const actionDeleteReview = (review) => {
  return {
    type: DELETE_REVIEW,
    review
  }
}

export const thunkGetReviews = (reviews) => async(dispatch) => {
  const res = await csrfFetch('/api/reviews');
  const reviews = await res.json();
  dispatch(actionGetReviews(reviews));
  return res;
}


const reviewReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_REVIEWS:
      action.reviews.forEach(review => {
        newState[review.id] = review;
      });
      return newState;

    default:
      return state;
  }
}

export default reviewReducer;
