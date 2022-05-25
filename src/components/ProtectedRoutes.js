import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase-config"
import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function ProtectedRoutes({children}) {
    const [user, setuser] = useState({})

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser)
    })
    
    if(!user) {
        return <Navigate to="/" />
    }
    return children
}
