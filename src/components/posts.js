import React , { useState, useEffect, useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../styles/posts.css'

export default function Posts({userName, setPost}){

    const { id } = JSON.parse(localStorage.getItem('user'))
    const [posts, setPosts] = useState()

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((Response) => {return Response.json()})
        .then((response) => {
          setPosts(response)
          console.log(response);
        })
    }, [userName])

    if(posts){

        return(
            <div className='container'>
                <nav className='navbar'>
                    {posts.map((post) => (
                        <Link 
                            className='link'
                            onClick={()=>setPost(posts.find(p =>p.id === post.id).body)}
                            key={post.id}    
                            to={`${post.id}`} 
                        >
                        {post.title}
                        </Link>
                    ))}
                </nav>
                <Outlet />
            </div>
        )
    } else {
        return(
            <div>
                <h1>posts</h1>
                <Outlet />
            </div>
        )
    }
}