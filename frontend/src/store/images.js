import { csrfFetch } from "./csrf";

const GET_IMAGES = 'images/GET_IMAGES'

const actionGetImages = (images) => {
  return{
    type: GET_IMAGES,
    images
  }
}

export const thunkGetImages = (images) => async(dispatch) => {
  const res = await csrfFetch('/api/images');
  const images = await res.json();
  dispatch(actionGetImages(images));
  return res;
}


const initialState = {
  images: []
}


const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGES:
      const allImages = {};
      action.images.forEach(image => {
        allImages[image.id] = image;
      });
      return {
        ...allImages,
        ...state
      }
    default:
      return state;
  }
};

export default imageReducer;
