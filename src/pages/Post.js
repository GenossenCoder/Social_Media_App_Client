import React, {useContext, useState} from 'react'
import Navbar from '../components/Navbar'
import {AuthContext} from '../Context/auth'
import {gql, useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom';

const Post = () => {
    const [errors,setErrors] = useState()
    const [button, setButton] = useState(false)
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
                window.location.reload()
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
                            {loading &&
                            <div className="flex flex-col justify-center items-center">
                            <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            </div>
                            }
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