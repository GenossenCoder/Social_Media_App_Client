import React from 'react'
import {AiFillHeart} from 'react-icons/ai';

const Post = (props) => {
  return (
    <div className=" p-2 bg-white text-black overflow-hidden max-h-96 shadow-lg">
      <h1 className="text-left ml-3 mt-3 font-bold text-black border-blue-400 border-b-2">{props.title}</h1>
      <h2 className="text-right font-bold text-black">{props.date}</h2>
      <h3 className="text-right font-bold text-black">{props.author}</h3>
      <div className="m-1 rounded-md text-black  break-words max-h-60 overflow-hidden p-2">
        {props.content}
      </div>
      <div className="flex justify-around">
      <a className="underline">{props.Comments}</a>
      <div className="flex">
        <p className="m-1">{props.like}</p>
        <button><AiFillHeart color="red"/></button>
      </div>
      </div>
    </div>
  )
}

export default Post