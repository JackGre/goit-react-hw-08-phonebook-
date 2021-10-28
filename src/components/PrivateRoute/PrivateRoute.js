import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import authSelector from "../../redux/auth/auth-selector";

export default function PrivateRoute({ children, ...props }) {
  const isLoggedIn = useSelector((state) => authSelector.getIsLoggedIn(state));

  return (
    <Route {...props}>{isLoggedIn ? children : <Redirect to="/login" />}</Route>
  );
}

