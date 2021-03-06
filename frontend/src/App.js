import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Users from './components/users';
import Spots from "./components/spots";
import Bookings from "./components/bookings";
import Splash from "./components/splash";
import EachSpot from "./components/EachSpot";
import Marinas from "./components/marinas";
import CreateSpotForm from "./components/CreateSpotFormModal";
import UserProfile from "./components/userProfile";
import Footer from "./components/footer";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Splash />
            <Footer />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
            <Footer />
          </Route>
          <Route exact path='/api/users'>
            <Users />
            <Footer />
          </Route>
          <Route path='/api/users/:id'>
            <UserProfile />
            <Footer />
          </Route>
          <Route exact path='/api/spots'>
            <Spots />
            <Footer />
            <CreateSpotForm />
          </Route>
          <Route path='/api/spots/:id'>
            <EachSpot />
            <Footer />
          </Route>
          <Route path='/api/bookings'>
            <Bookings />
            <Footer />
          </Route>
          <Route path='/api/marinas'>
            <Marinas />
            <Footer />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
