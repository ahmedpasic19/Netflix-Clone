import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase-config";
import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login({authorized}) {

  

  const [loginEmail, setloginEmail] = useState("")
  const [loginPassword, setloginPassword] = useState("")
  const navigate = useNavigate()

  const login = async(e) =>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth,loginEmail,loginPassword)
      navigate("/browse")
    } catch (error) {
      console.log(error.message)
    }
  }

  if(authorized) {
    return <Navigate to="/browse" />
  }

  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="email" onChange={(event) => {setloginEmail(event.target.value)}}/>
          <input type="password" placeholder="password" onChange={(event) => {setloginPassword(event.target.value)}}/>
          <button onClick={login}>Sign In</button>
        </form>
        <p>New to Netflix? <a href="/signup" className="font-bold hover:underline underline-offset-2">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
