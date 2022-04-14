import React, {useContext, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai';
import {AuthContext,lo} from '../Context/auth'
import {gql,useMutation} from '@apollo/client'

const LIKE_POST = gql`
mutation likePost($postId: ID!)
    {
    likePost(
        postId: $postId,
        ) 
        {
            likes{
                id
            }
        }
    }
`

const LikeButton = (props) => {
    const {user,logout} = useContext(AuthContext)
    const [current, setCurrent] = useState(props.like)
    const [likePost]=useMutation(LIKE_POST,{
        update(proxy,result){
            setCurrent(result.data.likePost.likes.length)
        },
        onError(err){
            logout()
        },
        variables:{
          postId: props.id},
      })
      if(user){
        return (
            <button className="flex items-center group hover:bg-black/10 pl-3 pr-3" onClick={(e)=>{likePost()}}>
                <p className="m-1">{current}</p>
                <p className=" group-hover:animate-ping"><AiFillHeart color="red"/></p>
            </button>
          )
      }
      else{
        return (
            <button className="flex hover:bg-black/10 pl-3 pr-3" diseabled="true">
                <p className="m-1">{current}</p>
                <p className="hover:animate-ping"><AiFillHeart color="red"/></p>
            </button>
          )
      }

}

export default LikeButton