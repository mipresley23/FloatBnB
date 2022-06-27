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
            <p>{spot.name}</p>
          </div>
        ))
      }
      </div>
      <div>
      {
        images.map(image => (
          <div>
            <img key={`${image.id}`} src={`${image.url}`} alt='spot image'></img>
          </div>
        ))
      }
      </div>
    </div>
  )
}
