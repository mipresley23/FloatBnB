import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { thunkGetBookings } from "../../store/bookings";

export default function Bookings() {
  const dispatch = useDispatch();
  const bookingSelector = useSelector(state => state.bookings);

  useEffect(() => {
    dispatch(thunkGetBookings())
  }, [dispatch])

  return (
    <div>
      <h1>Bookings</h1>

    </div>
  )
}
