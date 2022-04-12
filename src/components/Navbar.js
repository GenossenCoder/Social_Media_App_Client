import React from 'react'
import {FaHotjar} from 'react-icons/fa';
import {RiAccountCircleFill} from 'react-icons/ri'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsBellFill} from 'react-icons/bs'
import {GrNewWindow} from 'react-icons/gr'
import Logo from '../images/logo.svg'
const Navbar = () => {
  const newMessage = true
  if(window.innerWidth > 770){
    return(
      <div className="bg-emerald-300 shadow-xl flex flex-row fixed w-full top-0">
        <h1 className="basis-1/2 p-4 font text-xl"><img className="w-24"src={Logo}/></h1>
        <ul className="basis-1/2 flex flex-row items-center">
            <li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center hover:bg-emerald-500 text-3xl"><FaHotjar/></li>
            <li className=" flex basis-1/4 p-8 justify-center hover:bg-emerald-500">
              <span className=" inline-flex rounded-full text-3xl"><BsBellFill/></span>
              {newMessage&&<div className="bg-stone-500 inline-flex absolute translate-x-1 ">
                <span className=" animate-bounce  p-1.5 rounded-full hover:bg-emerald-500 absolute"></span>
              </div>}
            </li>
            <li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center hover:hover:bg-emerald-500 text-3xl"><GrNewWindow/></li>
            <li className="basis-1/4 p-8 cursor-pointer flex items-center justify-center hover:hover:bg-emerald-500 text-3xl"><RiAccountCircleFill/></li>
        </ul>
    </div>
    )
  }
  else{
    return (
      <div className="bg-emerald-300 shadow-xl flex flex-row fixed w-full top-0 border-b-2 border-emerald-500">
          <h1 className="basis-1/2 p-4 font text-xl"><img className="w-24"src={Logo}/></h1>
          <div className="flex-1 flex justify-end items-center">
            <div className="group m-0">
            <button className=" hover:bg-emerald-500 p-8 "><AiOutlineMenu/></button>
          
            <ul className="bg-emerald-300 absolute translate-y-1.0 translate-x-full right-0 w-64 flex flex-col border-2 border-emerald-500 border-t-0 rounded-t-none rounded-l-md text-xl group-hover:translate-x-0 transition-all duration-700">
              <li className="hover:bg-emerald-500 w-full flex justify-center p-5 border-b-2 border-black/25"><FaHotjar/></li>
              <li className=" flex basis-1/4 p-5 justify-center hover:bg-emerald-500 border-b-2 border-black/25">
              <span className=" inline-flex rounded-full  text-3xl "><BsBellFill/></span>
              {newMessage&&<div className="bg-stone-500 inline-flex absolute translate-x-1 ">
                <span className=" animate-bounce  p-1.5 rounded-full bg-sky-400 absolute"></span>
              </div>}
            </li>
              <li className="hover:bg-emerald-500 w-full flex justify-center p-5 border-b-2 border-black/25"><GrNewWindow/></li>
              <li className="hover:bg-emerald-500 w-full flex justify-center p-5"><RiAccountCircleFill/></li>
            </ul>
            </div>
            </div>
      </div>
      
    )
  }
}

export default Navbar