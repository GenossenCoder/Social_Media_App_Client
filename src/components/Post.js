import React from 'react'
import {AiFillHeart} from 'react-icons/ai';
import {Link} from 'react-router-dom'

const Post = (props) => {

  return (
    <div className=" p-2 bg-white text-black overflow-hidden max-h-96 shadow-lg cursor-pointer">
      <Link to={`/posts/${props.id}`}>
      <h1 className="text-left ml-3 mt-3 font-bold text-black border-blue-400 border-b-2 text-xl">{props.title}</h1>
      <h2 className="text-right font-bold text-black text-xs">{props.date}</h2>
      <h3 className="text-right  text-emerald-300">{props.author}</h3>
      <div className="m-1 rounded-md text-black  break-words max-h-60 overflow-hidden p-2">
        {props.content}
      </div>
      </Link>
      <div className="flex justify-around">
      <a className="underline">
      {props.comments===0&& <h1>Comment!</h1>}
      {props.comments===1&& <h1>{props.comments} Comment</h1>}
      {props.comments>1&& <h1>{props.comments} Comments</h1>}
      </a>
      <div className="flex">
        <p className="m-1">{props.like} </p>
        <button><AiFillHeart color="red"/></button>
      </div>
      </div>
      
    </div>
  )
}

export default Post