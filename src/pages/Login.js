import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";

export default function Login() {

  

  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign In</h1>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>New to Netflix? <a href="/signup" className="font-bold hover:underline underline-offset-2">Sign Up</a>
        </p>
      </div>
    </div>
  );
}
