import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase-config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate()

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      navigate("/browse")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="form_wraper">
        <h1>Sign Up</h1>
        <form>
          <input
            type="text"
            placeholder="email"
            onChange={(event) => setemail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setpassword(event.target.value)}
          />
          <button onClick={register}>Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            className="font-bold hover:underline underline-offset-2"
          >
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
