import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useEffect, useRef } from 'react'
import '../styles/login.css' 

export default function Login({users, updateEnter}){
    // const [myUser, setMyUser] = useState()
    const navigate = useNavigate()
    const input1 = useRef()
    const input2 = useRef()
    let user 
   

    let checkIn = () => {
        const name = input1.current.value
        const password = input2.current.value
        user = users.find((user) => {
            return user.name === name && password === user.address.geo.lat.slice(-4)
        })
        if(user){
            console.log('succes')
            navigate('/home')
            localStorage.setItem('user', JSON.stringify(user))
            updateEnter(name)
        } else {
            alert('incorrect password or name')
        }
    }

    useEffect(()=>{
        console.log(users)
    }, [users])
    
    return(
        <div className="container">
            <input className="input1" placeholder="name" type='text' ref={input1}/>
            <input className="input2" placeholder="password" type='password' ref={input2} />
            <button className="btn3" onClick={() => checkIn()} >Login</button>
        </div>
    )
}


