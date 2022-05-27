import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase-config";
import { useNavigate, Navigate } from "react-router-dom";

export default function Signup({authorized}) {

  const [registerEmail, setregisterEmail] = useState("")
  const [registerPassword, setregisterPassword] = useState("password")

  const navigate = useNavigate()

  const register = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
      navigate("/browse")
    } catch (error) {
      console.log(error)
    }
  }

  if(authorized) {
    return <Navigate to="/browse" />
  }


  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign Up</h1>
        <form onSubmit={register}>
          <input type="text" placeholder="email" onChange={(event) => {setregisterEmail(event.target.value)}}/>
          <input type="password" placeholder="password" onChange={(event) => {setregisterPassword(event.target.value)}}/>
          <button>Sign Up</button>
        </form>
        <p>Already have an account?<a  href="/login"className="font-bold hover:underline underline-offset-2" >Sign In</a>
        </p>
      </div>
    </div>
  );
}
