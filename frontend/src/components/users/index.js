import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import {thunkGetAllUsers} from "../../store/users";

export default function Users() {

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.users);



  useEffect(() => {
    dispatch(thunkGetAllUsers(1))
    console.log('sent dispatch');
  }, [dispatch])

  return (
    <div>
      <h1>Users</h1>
      <ol>

      </ol>
    </div>
  )
}
