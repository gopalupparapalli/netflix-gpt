import React, { useRef, useState } from "react";
import Header from "./Header";
import { FormValidation } from "./utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const [errormessage, setErrormessage] = useState();

  const navigate = useNavigate();
  const dispatch=useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    setisSignIn(!isSignIn);
  };
  const handleSubmitButton = () => {
    const message = FormValidation(email.current.value, password.current.value);
    setErrormessage(message);

    //Sign In and Sign Up Logic

    if (message === null) {
      if (!isSignIn) {
        //Sign Up

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }).then(() => {
              // Profile updated!
              // ...
              const {uid,email,displayName,photoURL} = auth.currentUser;

              dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        
              
              navigate("/browse")
            }).catch((error) => {
              // An error occurred
              // ...
              setErrormessage(error.message);
            });
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormessage(errorCode + "-" + errorMessage);
            // ..
          });
      } else {
        //SIgn In

        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            navigate("/browse");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrormessage(errorCode + "-" + errorMessage);
          });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d253acf4-a1e2-4462-a416-f78802dc2d85/f04bf88c-f71c-4d02-82ed-adb870b8f8db/IN-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_658a042e-62cf-473d-8da0-7b875f23e2ef_large.jpg"
          alt="bgimg"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black absolute p-12 my-36 w-3/12 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-md"
      >
        <h1 className="text-2xl py-4 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            type="Name"
            placeholder="Name"
            className="my-3 p-2 w-full rounded-sm bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Id"
          className="my-3 p-2 w-full rounded-sm bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-3 p-2 rounded-sm w-full bg-gray-700"
        />
        <p className=" text-red-700  font-bold text-lg">{errormessage}</p>
        <button
          className="bg-red-700 my-4 p-2 rounded-sm w-full font-bold"
          onClick={handleSubmitButton}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={handleClick} className="cursor-pointer">
          {isSignIn
            ? " New to Netflix?SignUp Now"
            : "Already registered?Sign In Now "}
        </p>
      </form>
    </>
  );
};

export default Login;
