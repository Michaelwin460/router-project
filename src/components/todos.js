import React , { useState, useEffect } from 'react'
import '../styles/todos.css'


export default  function Todos({userName}){

    const { id } = JSON.parse(localStorage.getItem('user'))
    const [todos, setTodos] = useState() 
    const [checkedList, setCheckedList] = useState([])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`)
        .then((Response) => {return Response.json()})
        .then((response) => {
          setTodos(response)
        })
    }, [userName])

    const handleChange = (event) => {
        event.preventDefault()
        if(!event.target.checked){
            setCheckedList({...checkedList, [event.target.value]: true})
        } else {
            setCheckedList({...checkedList, [event.target.value]: false})
        }
        console.log(checkedList[event.target.value]);
    }

    const sortHandler=(e)=>{
        const key = e.target.value;
        switch (key) {
            case 'complete':
                setTodos([...todos].sort((x, y)=>
                x.checked > y.checked ? 1 : -1 ,
                ))
                break;
            case 'abc':
                setTodos([...todos].sort((x, y)=>
                x.title > y.title ? 1 : -1 ,
                ))
                break;
            case 'random':
                setTodos([...todos].sort(()=>
                Math.random() >0.5 ? 1 : -1 ,
                ))
                break;
            case 'order':
                setTodos([...todos].sort((x, y)=>
                x.id > y.id ? 1 : -1 ,
                ))
                break;
            default:
                break;
        }
    }
    
    if(todos){

        return(
            <div >
                <div className='header'>
                    <div>todos list:   </div>         
                    <select className='select' onChange={sortHandler}>
                        <option defaultValue={true}>select order</option>
                        <option value="complete">complete</option>
                        <option value="abc">abc</option>
                        <option value="random">random</option>
                        <option value="order">order</option>
                    </select>
                    
                </div>
                <ul className='ul'>
                    {todos.map((todo, index) => (
                        <li key={index} style={{ display: "flex", flexDirection: 'column', justifyContent: "spaceBetween"}}>
                            {todo.title}                    
                            <input 
                                type="checkbox" 
                                onChange={handleChange}
                                checked={checkedList[index]}
                                value={todo.title}
                            />
                        </li> 
                    ))}
                </ul>
            </div>
        )
    } else {
        return(
            <h1>todos</h1>
        )
    }
    
}