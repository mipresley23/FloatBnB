import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {thunkGetAllUsers} from "../../store/users";

export default function Users() {

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.users);
  const [users, setUsers] = useState();



  useEffect(() => {
    dispatch(thunkGetAllUsers())
    console.log('sent dispatch');
  }, [dispatch])

  useEffect(() => {
    console.log(userSelector)
    setUsers(Object.values(userSelector))
  }, [userSelector])

  return (
    <div>
      <h1>Users</h1>
      {
        <p>{typeof users}</p>
      }
    </div>
  )
}
