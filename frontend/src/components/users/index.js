import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'
import {thunkGetAllUsers} from "../../store/users";
import '../../index.css';

export default function Users() {

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.users);
  const [users, setUsers] = useState();



  useEffect(() => {
    dispatch(thunkGetAllUsers())
  }, [dispatch])

  useEffect(() => {
    setUsers(Object.values(userSelector))
  }, [userSelector])

  return (
    <div>
      <h1>Users</h1>
      <ul className="user-list">

      {
        users && users.map(user => (
          <li key={user.id}>
            <NavLink to={`/api/users/${user.id}`}>{user.username}</NavLink>
          </li>
          ))
        }
        </ul>
    </div>
  )
}
