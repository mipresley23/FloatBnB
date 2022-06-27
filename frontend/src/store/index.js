import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookingsReducer from './bookings';
import imageReducer from './images';
import marinaReducer from './marinas';
import sessionReducer from './session';
import spotReducer from './spots';
import usersReducer from './users';


const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  spots: spotReducer,
  bookings: bookingsReducer,
  images: imageReducer,
  marinas: marinaReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}


const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
