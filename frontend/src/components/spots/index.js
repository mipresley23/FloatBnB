import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useParams } from "react-router-dom";
import {thunkGetAllSpots} from "../../store/spots";
import { thunkGetImages } from "../../store/images";


export default function Spots() {

  const dispatch = useDispatch();

  const spotSelector = useSelector(state => state.spots);

  const imageSelector = useSelector(state => state.images);



  const [spots, setSpots] = useState([]);
  const [images, setImages] = useState([]);




  useEffect(() => {
    dispatch(thunkGetAllSpots())
    console.log('sent dispatch');
  }, [dispatch])

  useEffect(() => {
    dispatch(thunkGetImages())
  }, [dispatch])

  useEffect(() => {
    setSpots(Object.values(spotSelector))
  }, [spotSelector])

  useEffect(() => {
    setImages(Object.values(imageSelector))
  }, [imageSelector])



  return (
    <div>
      <h1>Spots</h1>
      <div>

      {
        spots.map(spot => (
          <div>
            <h3>{spot.name}</h3>
            <p>{`$${spot.price}/night`}</p>
            <p></p>
          </div>
        ))
      }
      </div>
      <div>
        <img src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8eWFjaHR8ZW58MHx8MHx8&w=1000&q=80" alt="boat"></img>
      </div>
    </div>
  )
}
