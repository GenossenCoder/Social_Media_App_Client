import React from 'react'
import CommentLikeButton from './CommentLikeButton'

const Comment = (props) => {
  return (
    <div className="flex flex-col bg-white p-2">
      <h1 className="border-blue-500 border-b-2 w-full">{props.title}</h1>
      <h2 className="text-right text-xs font-bold">{props.date}</h2>
      <h3 className="text-right  text-emerald-300">{props.user}</h3>
      <div className="m-1 rounded-md text-black overflow-y-scroll break-words h-auto p-2 resize-none outline-none max-h-28">
      {props.content}
      </div>
      <CommentLikeButton id={props.id} likes={props.likes.length}/>
    </div>
  )
}

export default Comment