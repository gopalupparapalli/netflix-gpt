import React, { useState } from 'react'
import Header from './Header';

const Login = () => { 

  const [isSignIn,setisSignIn]=useState(true);

  const handleClick=()=>{
    setisSignIn(!isSignIn);

  }

  return (
    <>
    <Header />
    <div className='absolute'> 
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg" 
    alt="bgimg" />
    </div>
    
    <form className='bg-black absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-md' >
      <h1 className='text-2xl py-4 font-bold'>{isSignIn?"Sign In":"Sign Up"}</h1>
      {!isSignIn&&(
      <input type='Name' placeholder='Name' className='my-3 p-2 w-full rounded-sm bg-gray-700'/>)}
      <input type='email' placeholder='Email address' className='my-3 p-2 w-full rounded-sm bg-gray-700'/>
      <input type='password' placeholder='Password' className='my-3 p-2 rounded-sm w-full bg-gray-700'/>
      <button className='bg-red-700 my-4 p-2 rounded-sm w-full font-bold' >{isSignIn?"Sign In":"Sign Up"}</button>
      <p onClick={handleClick} className='cursor-pointer'>
      {isSignIn?" New to Netflix?SignUp Now":"Already registered?Sign In Now "}
        
      </p>
    </form>
    </>
  )
}

export default Login;