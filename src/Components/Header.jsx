import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from './utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './utils/userSlice';
import { LOGO } from './utils/constants';

const Header = () => {
  const navigate = useNavigate();
const dispatch=useDispatch();
  const user = useSelector(store => store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  };

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
  
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
  
    //unSubscribe when the component Unmounts 
    return()=>unSubscribe();
  },[])

  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between items-center'>
      <img
        className='w-44'
        src={LOGO}
        alt='logo'
      />
      {
        user &&
        <div className='flex items-center'>
        <img
          className='w-10 h-10 rounded-full mr-4'
          src={user.photoURL}
          alt='Profile'
        />
        <div className='mr-4 text-white text-lg font-semibold'>
          {user.displayName}
        </div>
        <button className='font-bold text-2xl text-white' onClick={handleSignOut}>
          Sign Out
        </button>
        </div>
      }
    </div>
  );
}

export default Header;
