import React,{useContext} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import Logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import {AuthContext} from '../Context/auth'


const Navbar = () => {
  const {user, logout}=useContext(AuthContext)
  const newMessage = true
  if(user) {
    if(window.innerWidth > 770){
      return(
        <div className="bg-white shadow-xl flex flex-row fixed w-full top-0">
          <h1 className="basis-1/2 p-4 font text-xl"><img className=" w-40 mt-2"src={Logo} alt=""/></h1>
          <ul className="basis-1/2 flex flex-row items-center">
              <Link to={'/'}><li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center border-b-2 border-white hover:border-emerald-300 text-2xl hover:text-emerald-300 hover:animate-pulse">Trends</li></Link>
              <li className=" flex basis-1/4 p-8 justify-center border-b-2 border-white hover:border-emerald-300 hover:text-emerald-300 hover:animate-pulse">
                <span className=" inline-flex rounded-full text-2xl">News</span>
                {newMessage&&<div className="bg-stone-500 inline-flex absolute translate-x-1 ">
                  <span className=" animate-bounce  p-1.5 rounded-full hover:bg-emerald-500 absolute"></span>
                </div>}
              </li>
              <Link to={'/post'}><li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center text-2xl border-b-2 border-white hover:border-emerald-300 hover:text-emerald-300 hover:animate-pulse">Post</li></Link>
              <li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center border-b-2 text-2xl border-white hover:border-emerald-300 hover:text-emerald-300 hover:animate-pulse">{user.username}</li>
              <li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center border-b-2 text-2xl border-white hover:border-emerald-300 hover:text-emerald-300 hover:animate-pulse" onClick={logout}>Logout</li>
          </ul>
      </div>
      )
    }
    else{
      return (
        <div className="bg-white shadow-xl flex flex-row fixed w-full top-0">
        <div className="basis-1/2 p-4 font text-xl flex justify-center"><img className="w-28 "src={Logo} alt=""/></div>
        <div className="flex-1 flex justify-end items-center">
          <div className="group m-0">
          <button className="border-b-2 border-white hover:border-emerald-300 p-8 "><AiOutlineMenu/></button>
        
          <ul className="bg-white absolute translate-y-1.5 translate-x-full right-0 w-64 flex flex-col border-2 border-white border-t-0 rounded-t-none rounded-l-md text-xl group-hover:translate-x-0 transition-all duration-700">
          <Link to={'/'}><li className="w-full flex justify-center p-5 border-b-2 border-white hover:border-emerald-300 text-2xl">Trends</li></Link>
            <li className=" flex basis-1/4 p-5 justify-center hover:border-emerald-300 border-b-2 border-white">
            <span className=" inline-flex rounded-full  text-2xl ">News</span>
            {newMessage&&<div className="bg-stone-500 inline-flex absolute translate-x-1 ">
              <span className=" animate-bounce  p-1.5 rounded-full bg-sky-400 absolute"></span>
            </div>}
          </li>
            <Link to={"/post"}><li className="hover:border-emerald-300 w-full flex justify-center p-5 border-b-2 border-white text-2xl">Post</li></Link>
            <li className="hover:border-emerald-300 w-full flex justify-center p-5 border-b-2 border-white text-2xl">{user.username}</li>
            <li className="hover:border-emerald-300 w-full flex justify-center p-5 border-b-2 border-white text-2xl"onClick={logout}>Logout</li>
          </ul>
          </div>
          </div>
    </div>
      )
    }
  }
  else{
    if(window.innerWidth > 770){
      return(
        <div className="bg-white shadow-xl flex flex-row fixed w-full top-0">
          <h1 className="basis-1/2 p-4 font text-xl"><img className=" w-40 mt-2"src={Logo} alt=""/></h1>
          <ul className="basis-1/2 flex flex-row items-center justify-end">
              <Link to={'/'}><li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center border-b-2 border-white hover:border-emerald-300 text-2xl hover:text-emerald-300 hover:animate-pulse">Trends</li></Link>
              <Link to={`/login`}><li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center border-b-2 text-2xl border-white hover:border-emerald-300 hover:text-emerald-300 hover:animate-pulse">Login</li></Link>
          </ul>
      </div>
      )
    }
    else{
      return (
        <div className="bg-white shadow-xl flex flex-row fixed w-full top-0">
        <div className="basis-1/2 p-4 font text-xl flex justify-center"><img className="w-28 "src={Logo} alt=""/></div>
        <div className="flex-1 flex justify-end items-center">
          <div className="group m-0">
          <button className="border-b-2 border-white hover:border-emerald-300 p-8 "><AiOutlineMenu/></button>       
          <ul className="bg-white absolute translate-y-1.5 translate-x-full right-0 w-64 flex flex-col border-2 border-white border-t-0 rounded-t-none rounded-l-md text-xl group-hover:translate-x-0 transition-all duration-700">
            <Link to={'/'}><li className="w-full flex justify-center p-5 border-b-2 border-white hover:border-emerald-300 text-2xl">Trends</li></Link>
            <Link to={`/login`}><li className="hover:border-emerald-300 w-full flex justify-center p-5 border-b-2 border-white text-2xl">Login</li></Link>
          </ul>
          </div>
          </div>
    </div>
      )
    }
  }
}

export default Navbar