import { Navigate } from "react-router-dom"

export default function TVshows({authorized}) {
  if(!authorized) {
    return <Navigate to="/" />
  } 
  return (
    <div>TVshows</div>
  )
}
