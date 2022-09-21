import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
import MichiganSpots from "./components/MichiganSpots";
import BritishColumbiaSpots from "./components/BritishColumbiaSpots";
import CaliforniaSpots from "./components/CaliforniaSpots";
import FloridaSpots from "./components/FloridaSpots";
import LouisianaSpots from "./components/LouisianaSpots";
import OntarioSpots from "./components/OntarioSpots";
import USVirginIslandsSpots from "./components/USVirginIslandsSpots";
import WashingtonSpots from "./components/WashingtonSpots";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <BrowserRouter>

      <Footer />
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Splash />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/users'>
            <Users />
          </Route>
          <Route path='/users/:id'>
            <UserProfile />
          </Route>
          <Route exact path='/spots'>
            <Spots />
          </Route>
          <Route path='/spots/:id'>
            <EachSpot />
          </Route>
          <Route path='/michigan'>
            <MichiganSpots />
          </Route>
          <Route path='/britishcolumbia'>
            <BritishColumbiaSpots />
          </Route>
          <Route path='/california'>
            <CaliforniaSpots />
          </Route>
          <Route path='/florida'>
            <FloridaSpots />
          </Route>
          <Route path='/louisiana'>
            <LouisianaSpots />
          </Route>
          <Route path='/ontario'>
            <OntarioSpots />
          </Route>
          <Route path='/usvirginislands'>
            <USVirginIslandsSpots />
          </Route>
          <Route exact path='/washington'>
            <WashingtonSpots />
          </Route>
        </Switch>
      )}
    </BrowserRouter>
  );
}

export default App;
