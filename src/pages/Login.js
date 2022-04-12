import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'

const Login = () => {
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
          <div className="flex flex-col">
            <h1 className="text-black font-bold">Username</h1>
            <input className="p-1 bg-transparent border-b-2 border-emerald-300 outline-none"/>
            <h1 className="text-black font-bold">Password</h1>
            <input type="password"className="p-1 bg-transparent border-b-2 border-emerald-300 outline-none"/>
            <button className="w-20 text-black mt-2 text-lg rounded-md bg-emerald-300 hover:animate-pulse">Login</button>
            <Link to={'/register'}><p className="text-lg underline text-emerald-700 cursor-pointer mt-4">New to T3lk? Sign up here!</p></Link>
          </div>
        </div>

      </div>
    </div>
        </div>
    </div>
  )
}

export default Login