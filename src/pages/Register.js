import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Logo from '../images/logo.svg'
import {gql} from '@apollo/client'

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

const Register = () => {
  const [values,setValues]= useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onChange = (event)=> {
    setValues({...values,[event.target.name]:event.target.value})
  }
  const onSubmit = (event)=> {
    event.preventDefault();
  }
  return (
    <div>
        <div><Navbar/></div>
        <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className=" flex items-center justify-center h-screen">
      <div className=" rounded-lg h-1/2 w-4/5  lg:w-2/3 grid grid-rows-2 grid-cols-5 md:flex md:flex-col sm:w-5/6">
        <div className="row-span-3 col-span-2 bg-white/10 flex justify-center p-8">
          <img src={Logo} className="w-72 "alt=""/>
        </div>
        <div className="col-span-3 row-span-2 flex items-center justify-center flex-col bg-white/25 p-8">
          <form className="flex flex-col" onSubmit={onSubmit()}>
            <h1 className="text-black font-bold">Username</h1>
            <input className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Username" placeholder="Username" onChange={onChange()}/>
            <h1 className="text-black font-bold">Email</h1>
            <input className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Email" placeholder="Email" onChange={onChange()}/>
            <h1 className="text-black font-bold">Password</h1>
            <input type="password"className="p-1 bg-transparent border-b-2 border-blue-400 outline-none" name="Password" placeholder='Password' onChange={onChange()}/>
            <h1 className="text-black font-bold">Confirm Password</h1>
            <input type="password"className="p-1 bg-transparent border-b-2 border-blue-400 outline-none " name="Confirm Password" placeholder='Confirm Password' onChange={onChange()}/>
            <button className="w-20 text-black mt-2 text-lg rounded-md bg-emerald-300 hover:animate-pulse" type="submit" onSubmit={onSubmit()}>Sign Up</button>
          </form>
        </div>

      </div>
    </div>
        </div>
    </div>
  )
}

export default Register