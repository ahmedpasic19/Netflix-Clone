import { async } from "@firebase/util";

export default function Signup() {
  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign Up</h1>
        <form>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign Up</button>
        </form>
        <p> Already have an account?<a  href="/login"className="font-bold hover:underline underline-offset-2" >Sign In</a>
        </p>
      </div>
    </div>
  );
}
