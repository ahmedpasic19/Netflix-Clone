import { Navigate } from "react-router-dom"
export default function Latest({authorized}) {

  if(!authorized) {
    return <Navigate to="/login" />
  }
  return (
    <div>Latest</div>
  )
}
