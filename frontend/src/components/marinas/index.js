import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { thunkGetMarinas } from "../../store/marinas";
import '../../index.css';

export default function Marinas() {

  const dispatch = useDispatch();

  const marinaSelector = useSelector(state => state.marinas);

  const [marinas, setMarinas] = useState([]);

  useEffect(() => {
    dispatch(thunkGetMarinas())
  }, [dispatch])

  useEffect(() => {
    setMarinas(Object.values(marinaSelector))
  }, [marinaSelector])

  return(
    <div>
      <h1>Marinas</h1>
      {
        marinas.map(marina => (
          <h3>{marina.name}</h3>
        ))
      }
    </div>
  )

}
