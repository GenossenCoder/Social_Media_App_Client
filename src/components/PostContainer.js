import React from 'react'
import Post from './Post'
import {useQuery,gql} from '@apollo/client'
const FETCH_POSTS_QUERY = gql`
    {
    getPosts{
      id
      theme
      title
      content
      createdAt
      username
      comments {
        content
        username
        createdAt
        likes {
          id
        }
      }
      likes {
        id
      }
    }
    }
`
const PostContainer = () => {
  const {loading, data} = useQuery(FETCH_POSTS_QUERY)
  if(data){
    console.log(data.getPosts[0].likes.lenght)
  }
  return (
    <div className="p-8 md:p-2 m-4 md:mx-0 my-32 bg-white/10 bg shadow-md rounded-xl">
        <h1 className="p-4 text-black text-4xl">Theme</h1>
        <div className="grid grid-cols-5 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
        {loading?(<div>loading</div>):(
            data&&
            data.getPosts.map((post) =>(
              <Post title={post.title} date={post.createdAt} author={post.username} content={post.content} id={post.id} comments={post.comments.lenght} like={post.likes.lenght} />
            ))
          )}
        </div>
    </div>
  )
}

export default PostContainer