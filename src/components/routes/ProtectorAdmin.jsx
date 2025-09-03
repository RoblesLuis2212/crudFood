import React from "react";
import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({ usuarioLogeado }) => {
  //si no estoy logueado
  if (!usuarioLogeado) {
    return <Navigate to={"/login"} />;
  } else {
    return <Outlet />;
  }
};

export default ProtectorAdmin;
