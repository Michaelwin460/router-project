import {Outlet, Link, useNavigate} from 'react-router-dom'
import '../styles/home.css'

// import React , { useState, useEffect } from 'react'

export default function Home(){

    const navigate = useNavigate()
    const { name } = JSON.parse(localStorage.getItem('user'))
    

    const logOut = () => {
        localStorage.removeItem('user')
        navigate('/')
        console.log('erace')
    }

    return(
        <div className='wrap'>
            <div className='title'>
                <h1>Hello {name}!</h1>
            </div>
            <nav className='navbar'>
                <span className='spans'><Link to="info">Info</Link></span>
                <span className='spans'><Link to="todos">Todos</Link></span>
                <span className='spans'><Link to="albums">Albums</Link></span>
                <span className='spans'><Link to="posts">Posts</Link></span>
                <span className='spans'><button onClick={logOut}>Logout</button></span>
            </nav>
            <Outlet />
        </div>
    )
}