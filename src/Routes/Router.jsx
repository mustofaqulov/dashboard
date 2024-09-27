import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Homepage, Users } from "../pages";
import { Login } from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import NotFoundPage from "../pages/Notfound/PageNotFound";

export default function Router() {
  let token = localStorage.getItem("token");
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Homepage />
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
        {token && <Route path="*" element={<NotFoundPage />} />}
      </Route>

      <Route path="/auth-login" element={<Login />} />

      {!token && (
        <Route path="*" element={<Navigate to="/auth-login" replace />} />
      )}
    </Routes>
  );
}
