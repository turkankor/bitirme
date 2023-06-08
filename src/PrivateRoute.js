import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import Login from "./Login";
import MainApp from "./MainApp";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { user } = useAuthContext();

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" replace />}
    />
  );
};

export default PrivateRoute;
