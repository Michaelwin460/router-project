import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export default function Post({ userName, post }) {

  let {postId} = useParams()
  const [comments, setComments] = useState([])
  const [showMe, setShowMe] = useState(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    .then((response) => response.json())
    .then((json) =>{
      console.log(json);
       setComments(json)});
  }, [userName, postId])

  useEffect(()=>{
    console.log(post);
    setShowMe(false)
  }, [post])

  const showComments = () => {
    setShowMe(true)
    console.log(showMe);
  }

    console.log(comments)

    return (
        <div style={{margin: 20}}>
            <h1>{post ? `${post}` : 'select a post'}</h1>
            <br/>
            <button onClick={showComments}>comments</button>
            <br/>
            <ul>
              {showMe ? comments?.map((comment) => (
              <li key={comment.id}>{comment.body}</li>
              )): ''}
            </ul> 
        </div>
      ) 
}