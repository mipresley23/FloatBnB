import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bookingsReducer from './bookings';
import marinaReducer from './marinas';
import sessionReducer from './session';
import spotReducer from './spots';
import usersReducer from './users';
import reviewReducer from './reviews';
import favoriteReducer from './favorites';


const rootReducer = combineReducers({
  session: sessionReducer,
  users: usersReducer,
  spots: spotReducer,
  bookings: bookingsReducer,
  marinas: marinaReducer,
  reviews: reviewReducer,
  favorites: favoriteReducer
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
