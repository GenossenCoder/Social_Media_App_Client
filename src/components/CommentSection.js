import React from 'react'
import Comment from '../components/Comment'

const CommentSection = () => {
  return (
    <div className="w-full h-auto flex items-center justify-center">
        <div className=" w-full lg:mx-20 mx-10 md:mx-0 bg-white grid gap-4 grid-cols-3">
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        </div>
    </div>
  )
}

export default CommentSection