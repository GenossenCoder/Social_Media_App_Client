import React,{useContext, useState} from 'react'
import Comment from '../components/Comment'
import {AuthContext} from '../Context/auth'
import {gql, useMutation} from '@apollo/client'

const CREATE_COMMENT = gql`
mutation createComment($postId: String!, $title: String!, $content: String!){
  createComment(postId: $postId, title: $title, content: $content) {
    comments {
      id
      username
      title
      createdAt
      content
    }
    likes{
      username
    }
  }
}
`
const CommentSection = (props) => {
  const [title, setTitle] = useState()
  const [content, setContent] = useState()
  const [error, setError] = useState()
  const {user}= useContext(AuthContext)
    const [createComment]=useMutation(CREATE_COMMENT,{
      update(proxy,result){
          if(result){
            window.location.reload();
          }

      },
      onError(err){
        setError(err)
      },
      variables:{
        postId: props.id,
        title:   title,
        content: content,
      },
    })

  return (
    <div className="w-full h-auto flex items-center justify-center">
      <div className=" p-2 rounded-md w-full lg:mx-20 mx-10 md:mx-0 bg-white/40 grid gap-4 sm:grid-cols-2 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6 shadow-lg">
        {user&&<form className="bg-white/25 flex flex-col w-full p-2" onSubmit={(e)=>{
          e.preventDefault();
          createComment()
          }}>
          <h1 className="font-bold text-center">Create a Comment</h1>
          <input placeholder="Title..." className="bg-white w-full mb-2 outline-none" onChange={(e)=>{setTitle(e.target.value)}}></input>
          <textarea placeholder="Content..." className="w-full resize-none mb-2 outline-none" onChange={(e)=>{setContent(e.target.value)}}></textarea>
          <button className="bg-emerald-300 rounded-md hover:bg-emerald-500" type="submit">Create</button>
          {error&&<div className="bg-rose-200 text-xs p-4 border-2 border-red-500 mt-3 font-bold animate-pulse text-center">You have to fill all fields</div>}
        </form>}
        {props.data&&props.data.map((comment) =>(<Comment title={comment.title} content={comment.content} date={comment.createdAt} user={comment.username} id={comment.id} likes={comment.likes}/>))}
        </div>
    </div>
  )
}

export default CommentSection