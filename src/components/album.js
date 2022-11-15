
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import Slider from './slider'


export default function Album({ userName, album }) {

  let { albumId } = useParams()
  const [pics, setPics] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPics(json)
      });
  }, [userName, albumId])

  useEffect(() => {
    console.log(pics);
  }, [pics])

  return (
    <div style={{ margin: 20 }}>
      <h1>{album ? `${album}` : 'select album'}</h1>
      <br />
      <div style={{ width: 350, height: 150, marginLeft:260 }}>
        <Slider pics={pics} />
      </div> 
      <br />
    </div>
  )
}
