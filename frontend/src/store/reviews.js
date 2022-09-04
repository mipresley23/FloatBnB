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

const actionDeleteReview = (reviewId) => {
  return {
    type: DELETE_REVIEW,
    reviewId
  }
}

export const thunkGetReviews = (reviews) => async(dispatch) => {
  const res = await csrfFetch('/api/reviews');
  const reviews = await res.json();
  dispatch(actionGetReviews(reviews));
  return res;
}

export const thunkCreateReview = (review) => async(dispatch) => {
  const {content, rating, userId, spotId} = review;
  const res = await csrfFetch('/api/reviews/new', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(review)
  });
  if(res.ok){
    const review = await res.json()
    dispatch(actionCreateReview(review))
    return res;
  }
}

export const thunkEditReview = (review) => async(dispatch) => {
  console.log('thunk edit review: ', review)
  // const { constent, rating, userId, spotId } = review;
  const res = await csrfFetch(`/api/reviews/${review.id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json" },
    body: JSON.stringify(review)
  });
  if(res.ok){
    const review = await res.json();
    dispatch(actionUpdateReview(review));
    return res;
  }
}

export const thunkDeleteReview = (reviewId) => async (dispatch) => {
  const res = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: "DELETE"
  })
  const data = await res.json();
  dispatch(actionDeleteReview(data))
  return data;
}


const reviewReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case GET_REVIEWS:
      action.reviews.forEach(review => {
        newState[review.id] = review;
      });
      return newState;

    case CREATE_REVIEW:
      newState[action.review.id] = action.review
      return newState

    case UPDATE_REVIEW:
      newState[action.review.id] = action.review
      return newState

    case DELETE_REVIEW:
      console.log('delete reducer action: ', action)
      const deleteReviewId = action.reviewId.id
      delete newState[deleteReviewId]
      return newState

    default:
      return state;
  }
}

export default reviewReducer;
