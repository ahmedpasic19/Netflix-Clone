import { signOut } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase-config"

export default function MainPage() {

  const navigate = useNavigate()

  const logout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <div>
      <button onClick={logout} className=" bg-red-600 rounded px-3 text-white">Sing out</button> <br></br>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>
      MainPage<br/>

    </div>
  )
}
