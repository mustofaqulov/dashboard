import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "../layouts/Layout";
import { Homepage, Team, Blog, Commerce } from "../pages";
import { Login } from "../pages/auth/Login";
import { PrivateRoute } from "./PrivateRoute";
import NotFoundPage from "../pages/PageNotFound";

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
          path="/team"
          element={
            <PrivateRoute>
              <Team />
            </PrivateRoute>
          }
        />
        <Route
          path="/blog"
          element={
            <PrivateRoute>
              <Blog />
            </PrivateRoute>
          }
        />
        <Route
          path="/commerce"
          element={
            <PrivateRoute>
              <Commerce />
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
