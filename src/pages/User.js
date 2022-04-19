import React, {useContext} from 'react'
import Navbar from '../components/Navbar'
import {AuthContext} from '../Context/auth'
import {gql,useQuery} from '@apollo/client'
import{Link} from 'react-router-dom'

const FETCH_USER = gql`
query getUser($id:String!) {
  getUser(id: $id){
    id username email createdAt 
    Posts{
      id createdAt title
    }
  }
}
`
const User = () => {
    const {user}= useContext(AuthContext)
    const {data}=useQuery(FETCH_USER, {variables: {id: user.id}})
  return (
    <div>
        <Navbar/>
        {data&&
        <div className="flex items-center justify-center w-full mt-40">
          <div className=" bg-white h-auto p-2 w-5/6 sm:w-full shadow-lg grid grid-row-5 grid-cols-2 gap-2">
          <h1 className="font-bold ">Name:</h1><div className="text-sky-400">{data.getUser.username}</div>
          <h3 className="font-bold">E-mail:</h3><div className="text-sky-400">{data.getUser.email}</div>
          <h2 className="font-bold">You joined T3LK on:</h2><div className="text-sky-400">{data.getUser.createdAt}</div>
          <h4 className="font-bold">All your posts:</h4>
          <div className="bg-gray-50 flex flex-col gap-2 rounded-lg h-40 overflow-y-scroll p-5 sm:col-span-2 ">
            {data.getUser.Posts&&data.getUser.Posts.map((post)=>(
            <Link to={`/posts/${post.id}`}><div className="bg-white shadow-md p-2 border-b-2 border-sky-500 flex flex-row items-center font-bold">
            <p className="text-left">{post.title}</p><p className="text-right w-full font-thin text-sm text-gray-500">{post.createdAt}</p>
          </div></Link>))}
          </div>
          </div>
        </div>}
    </div>
  )
}

export default User