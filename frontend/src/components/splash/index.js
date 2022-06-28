import { NavLink } from "react-router-dom";

export default function Splash() {
  return(
    <div>
      <h1>Welcome to FloatBnB</h1>
      <NavLink to='/api/spots'>Spots</NavLink>
      <NavLink to='/api/bookings'>Bookings</NavLink>
      <NavLink to='/api/marinas'>Marinas</NavLink>
    </div>
  )
}
