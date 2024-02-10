import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className=''>
     
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
       <h1 className=' text-red-700 '>hi</h1>

      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700 text-lg'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1>
      <h1 className=' text-red-700'>hi</h1> 
     </div>
   
    </>
  )
}

export default App
