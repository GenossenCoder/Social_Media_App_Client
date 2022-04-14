import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import {AuthContext} from '../Context/auth'
import {gql, useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import { FETCH_POSTS_QUERY } from '../util/Graphql';

const Post = () => {
    const [errors,setErrors] = useState()
    const [button, setButton] = useState(false)
    const context= useContext(AuthContext)
    const navigate = useNavigate();
    const [theme, setTheme] = useState("")
    const [title,setTitle] = useState("")
    const [content, setContent] = useState("")
    const {user}=useContext(AuthContext)

    function validateInput(theme,title,content) {
        if(theme.trim()!==''&& title.trim()!==''&& content.trim()!==''){
            setButton(true)
        }
        else{
            setButton(false)
        }
    }

    const CREATE_POST = gql`
    mutation createPost(
        $theme: String!, 
        $title: String!, 
        $content: String!)
        {
        createPost(
            theme: $theme,
            title: $title, 
            content: $content) 
            {
            id theme title content createdAt username
            }
        }
    `
      const [createPost, {loading}]=useMutation(CREATE_POST,{
        update(proxy,result){
            if(result){
                navigate('/');
            }

        },
        onError(err){
          try{
              console.log(err.graphQLErrors[0].extensions.exception.stacktrace[0])
          setErrors(err.graphQLErrors[0].extensions.exception.stacktrace[0]);
          }
          catch(err){}
        },
        variables:{
          theme: theme,
          title:   title,
          content: content,
        },
      })
    if(user){
        return (
            <div>
                <Navbar/>
                <div className="h-screen w-full flex flex-row items-center justify-center">
                    <form className="bg-white/40 w-1/2 sm:w-full  lg:w-2/3" onSubmit={(e)=>{
                        e.preventDefault();
                        createPost();
                        }}>
                        <div className="m-5 flex flex-col gap-4">
                            <h1 className="font-bold p-5">Make a Post!</h1>
                            <input placeholder="Theme" className="w-5/6 outline-none p-1 text-md" onChange={(e)=>{setTheme(e.target.value)}}></input>
                            <input placeholder="Title" className="w-5/6 outline-none p-1 text-md" onChange={(e)=>{setTitle(e.target.value); validateInput(theme,title,content);}}></input>
                            <textarea className="w-full text-xs resize-none outline-none p-1 h-40"onChange={(e)=>{setContent(e.target.value); validateInput(theme,title,content);}} placeholder="What do you want to say?"></textarea>
                            {button&&<button className="bg-blue-400 rounded-md w-1/3 font-bold">Create</button>}
                            {!button&&<button diseabled="true" className="bg-white/50 rounded-md w-1/3 font-bold">Create</button>}
                            {errors&&
                            <div className="flex flex-col items-center justify-center ">
                                <h1 className="bg-rose-200 text-xs p-4 border-2 border-red-500 mt-3 font-bold animate-pulse ">Ooops something went wrong! Please make sure that you filled all fields and try again.</h1>
                            </div>}
                        </div>
                    </form>
                </div>
            </div>
        ) 
    }else{
        return (
            <div>
                <div><Navbar/></div>
                <div className=" flex flex-row w-full h-screen justify-center items-center">
                    <div className=" text-center bg-white/40 p-10 rounded-md">
                        <h1 className="font-bold text-2xl mb-3">Access denied!</h1>
                        <h2>You must be logged in to create a Post!</h2>
                    </div>
                </div>
            </div>
          )
    }
}

export default Post