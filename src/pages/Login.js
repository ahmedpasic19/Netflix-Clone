import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../Firebase-config";


export default function Login() {

  const  [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth,)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="email" onChange={(event) => setemail(event.target.value)}/>
          <input type="password" placeholder="password" onChange={(event) => setpassword(event.target.value)}/>
          <button onClick={login}>Sign In</button>
        </form>
        <p>
          New to Netflix? <a href="/signup" className="font-bold hover:underline underline-offset-2">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
