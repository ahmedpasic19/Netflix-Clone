import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../firebase-config"
import { Navigate } from "react-router-dom"
import { useState } from "react"

export default function ProtectedRoutes({children}) {
    const [user, setuser] = useState()
    const loggin = true

    onAuthStateChanged(auth, (currentUser) => {
        setuser(currentUser)
        console.log(user)
    })
    
    if(user) {
        return <Navigate to="/browse" />
    }
    return children
}
