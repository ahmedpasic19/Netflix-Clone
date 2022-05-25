import { Navigate } from "react-router-dom"

export default function Mylist({authorized}) {

    if(!authorized) {
        return <Navigate to="/" />
    }

  return (
    <div>Mylist</div>
  )
}
