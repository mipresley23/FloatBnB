import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'
import {thunkGetAllUsers} from "../../store/users";
import '../../index.css';
import './users.css';

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
    <div id="users-page-container">
      <h1>Users</h1>
      <ol className="user-list">

      {
        users && users.map(user => (
          <li key={user.id}>
            <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
          </li>
          ))
        }
        </ol>
    </div>
  )
}
