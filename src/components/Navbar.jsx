import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import logo from '../assets/download.png'

const Navbar = () => {
    const [scroll,setscroll] = useState(false)

    const Transform = () => {
        if(window.scrollY >=  60) {
            setscroll(true)
        }else{setscroll(false)}
    } 
    
    useEffect(()=>{
        window.addEventListener("scroll",Transform);
        return () => window.removeEventListener("scroll",Transform)
    },[])

  return (
    // <div className={`${scroll ?' ease-in':' bg-slate-500'}`&&' fixed w-full p-1 flex items-center justify-between z-40 mb-30 bg-slate-600 '}>
    //      <Link to="/home">
    //      <img className=' ml-4' src={logo} alt="" /></Link>

    //      <div>
    //         <Link to="/login">
    //         <button className=' capitalize pr-4 text-white'>login</button></Link>
    //         <Link to="/signup">
    //         <button className=' capitalize bg-red-600 px-6 py-2 rounded cursor-pointer'>signup</button></Link>
    //         <Link > </Link>
    //         <Link to="/profile">
    //         <button className=' capitalize pr-4 text-white'>profile</button></Link>

            
    //      </div>
    // </div> 
    <div className='fixed w-full'>
    <div className={`flex justify-between  top-0 z-40 ${scroll ? 'bg-black' : ' bg-gradient-to-b from-slate-400'}`}>
      <div className=' p-2'>
        
        <img className='ml-4' src={logo} alt="" />
      
      </div>
      
      <ul className='flex mr-3 p-5'>
      <Link to="/login">
        <li className='text-white my-auto ml-3'>login</li>
        </Link>
        <Link to="/signup">
        <li className='text-white my-auto ml-3'>signup</li>
        </Link>
        <Link to='/profile'>
        <li className='text-white my-auto ml-3'>profile</li>
        </Link>
      </ul>
    </div>
  </div>
  
    
  )
}

export default Navbar