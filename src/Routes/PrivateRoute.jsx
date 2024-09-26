import { Navigate } from "react-router-dom";

export function PrivateRoute({ children }) {
  let auth = localStorage.getItem("token");

  console.log(auth);

  if (!auth) {
    return <Navigate to={"/auth-login"} />;
  }

  return children;
}
