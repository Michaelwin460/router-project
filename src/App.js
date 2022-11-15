
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login'
import Home from './components/home'
import Info from './components/info'
import Albums from './components/albums'
import Todos from './components/todos'
import Posts from './components/posts'
import Post from './components/post'
import Album from './components/album'
import { useState, useEffect } from 'react'


function App() {

  const [data, setData] = useState()
  const [userName, setUserName] = useState()
  const [post, setPost] = useState()
  const [album, setAlbum] = useState()
 
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((Response) => {return Response.json()})
        .then((response) => {
          setData(response)
        })
    },[])

    useEffect(()=>{
      console.log(post);
    }, [post])

    const getUserData = (data) => {
      setUserName(data)
      console.log(userName)
    }


    

  return (
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Login users={data} updateEnter={getUserData}/>} />
      <Route path='/home' element={<Home />} >
        <Route path='info' element={<Info />} />
        <Route path='albums' element={<Albums setAlbum={setAlbum} userName={userName} />} >
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Select album to present</h1>
            </main>
            }
          />
          <Route path=':albumId' element={<Album album={album} userName={userName} />} />
        </Route>
        <Route path='todos' element={<Todos userName={userName} />} />
        <Route path='posts' element={<Posts setPost={setPost} userName={userName} />} >
        <Route
          index
          element={
            <main style={{ padding: "1rem" }}>
              <h1>Select a post</h1>
            </main>
            }
          />
          <Route path=":postId" element={<Post post={post} userName={userName}/>} />
        </Route>
      </Route>
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
