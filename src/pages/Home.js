import React from 'react'
import {useQuery,gql} from '@apollo/client'
import Navbar from '../components/Navbar'
import PostContainer from '../components/PostContainer'

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

const Home = () => {
  const {loading, data} = useQuery(FETCH_POSTS_QUERY)
  if (data){
    console.log(data)
  }
  return (
    <div>
        <div><Navbar/></div>
        <div><PostContainer/></div>
    </div>
  )
}

export default Home