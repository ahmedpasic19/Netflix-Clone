import { Navigate } from "react-router-dom";

export default function Movies({ authorized }) {
  if (!authorized) {
    return <Navigate to="/login" />;
  }
  return <div>Movies</div>;
}
