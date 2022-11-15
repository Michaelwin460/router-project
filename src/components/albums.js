import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from 'react'
import '../styles/albums.css'


export default function Albums({userName, setAlbum}){

    const { id } = JSON.parse(localStorage.getItem('user'))
    const [albums, setAlbums] = useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
        .then((Response) => {return Response.json()})
        .then((response) => {
          setAlbums(response)
          console.log(response);
        })
    }, [userName])

    if(albums){

    return(
        <div className='container'>
                <nav className='navbar'>
                    {albums.map((album) => (
                        <Link 
                            className='link'
                            onClick={()=>setAlbum(albums.find(p =>p.id === album.id).title)}
                            key={album.id}    
                            to={`${album.id}`} 
                        >
                        {album.title}
                        </Link>
                    ))}
                </nav>
                <div>
                <Outlet />
                </div>
            </div>
    )}
}