import React, {useState, useContext} from 'react'
import Navbar from '../components/Navbar'
import Logo from '../images/logo.svg'
import {gql, useMutation} from '@apollo/client'
import {useNavigate} from 'react-router-dom';
import { AuthContext } from "../Context/auth";

const REGISTER_USER =gql`
  mutation register(
  $username: String!
  $email: String!
  $password: String!
  $confirmPassword: String!)
  {
  register(
  registerInput:{
    username: $username
    email:   $email
    password: $password
    confirmPassword: $confirmPassword
  }
  ){
  id email username createdAt token}
  }
`

const Register = (props) => {
  const context= useContext(AuthContext)
  const navigate = useNavigate();
  const [errors,setErrors] = useState()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  
  const [addUser, {loading}]=useMutation(REGISTER_USER,{
    update(proxy,result){
      context.login(result.data.register)
      navigate('/');
    },
    onError(err){
      try{
      setErrors(err.graphQLErrors[0].extensions.errors);
      }
      catch(err){}
    },
    variables:{
      username: username,
      email:   email,
      password: password,
      confirmPassword: confirmpassword
    },
  })
    return (
      <div>
          <div><Navbar/></div>
          <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className=" flex items-center justify-center h-screen">
        <div className=" rounded-lg h-2/3 w-4/5  lg:w-2/3 grid grid-rows-2 grid-cols-5 md:flex md:flex-col sm:w-5/6">
          <div className="row-span-3 col-span-2 bg-white/10 flex justify-center p-8">
            <img src={Logo} className="w-72 "alt=""/>
          </div>
          <div className="col-span-3 row-span-2 flex items-center justify-center flex-col bg-white/25 p-8">
            <form className="flex flex-col" onSubmit={(e)=>{
              e.preventDefault();
              addUser();
            }}>
              <h1 className="text-black font-bold">Username</h1>
              <input className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Username" placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
              <h1 className="text-black font-bold">Email</h1>
              <input className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
              <h1 className="text-black font-bold">Password</h1>
              <input type="password"className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
              <h1 className="text-black font-bold">Confirm Password</h1>
              <input type="password"className="p-1 bg-transparent border-b-2 border-blue-400 outline-none " name="Confirm Password" placeholder='Confirm Password' onChange={(e)=>{setConfirmPassword(e.target.value)}}/>
              <button className="w-20 text-black mt-2 text-lg rounded-md bg-emerald-300 hover:animate-pulse" type="submit">Sign Up</button>
            </form>
            {loading &&
            <svg role="status" className="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            }

            {errors&&
            <ul className="list-none bg-rose-200 text-xs p-4 border-2 border-red-500 mt-3 font-bold animate-pulse ">
              {errors.username&&<li className="mb-1">{errors.username} !</li>}
              {errors.email&&<li className="mb-1">{errors.email} !</li>}
              {errors.password&&<li className="mb-1">{errors.password} !</li>}
              {errors.confirmPassword&&<li className="mb-1">{errors.confirmPassword} !</li>}
            </ul>
            }
          </div>

        </div>
      </div>
          </div>
      </div>
    )
  }

export default Register