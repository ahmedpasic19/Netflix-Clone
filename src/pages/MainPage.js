import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";

import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function MainPage({ authorized }) {
 

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  if (!authorized) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <button onClick={logout} className=" bg-red-600 rounded px-3 text-white">
        Sing out
      </button>{" "}
      <br></br>
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
      MainPage
      <br />
    </div>
  );
}
