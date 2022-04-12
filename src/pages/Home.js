import React from 'react'
import Navbar from '../components/Navbar'
import PostContainer from '../components/PostContainer'

const Home = () => {
  return (
    <div className="flex flex-col flex-1">
        <div className="flex "><Navbar/></div>
        <div className="flex "><PostContainer/></div>
    </div>
  )
}

export default Home