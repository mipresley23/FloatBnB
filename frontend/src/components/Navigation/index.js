import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';
import '../../index.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink id='signuplink' to="/signup">
          <img id='sign-up-image' src={require('./add-user.png')}></img>
        </NavLink>
      </>
    );
  }

  return (
    <div id='navdiv'>
      <ul id='navwrapper'>
          <NavLink id='logo-home-link' to='/'>
            <img id='logo-image' src={require('./FloatBnBLogo.png')} alt='FloatBnB Logo' />
          </NavLink>
        <li className='navbarLinks'>
            <NavLink id="homelink" exact to="/">
              <img id='homelink-image' src={require('./home.png')} alt='Home Link' />
            </NavLink>
            {isLoaded && sessionLinks}
        </li>
      </ul>

    </div>
  );
}

export default Navigation;
