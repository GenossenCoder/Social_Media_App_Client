import React, {useContext, useState} from 'react'
import {AiFillHeart} from 'react-icons/ai';
import {AuthContext} from '../Context/auth'
import {gql,useMutation} from '@apollo/client'

const LIKE_COMMENT = gql`
mutation likeComment($postId: String!,$commentId: String!)
    {
    likeComment(
        postId: $postId,
        commentId: $commentId,
        ){
            id
            comments{
                id
                likes{
                    id
                }
            }
        }
    }
`

const LikeButton = (props) => {
    const postId=window.location.pathname.slice(7)
    const {user,logout} = useContext(AuthContext)
    const [current, setCurrent] = useState(props.likes)
    const [likeComment]=useMutation(LIKE_COMMENT,{
        update(proxy,result){
            const num = result.data.likeComment.comments.findIndex((comment) => comment.id===props.id)
            setCurrent(result.data.likeComment.comments[num].likes.length)
        },
        onError(err){
            logout()
        },
        variables:{
            postId: postId,
            commentId: props.id
        },
      })
      if(user){
        return (
            <button className="flex items-center group hover:bg-black/10 pl-3 pr-3" onClick={(e)=>{likeComment()}}>
                <p className="m-1">{current}</p>
                <p className=" group-hover:animate-ping"><AiFillHeart color="red"/></p>
            </button>
          )
      }
      else{
        return (
            <button className="flex items-center pl-3 pr-3" diseabled="true">
                <p className="m-1">{current}</p>
                <p className=""><AiFillHeart color="gray"/></p>
            </button>
          )
      }

}

export default LikeButton