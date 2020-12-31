/** @format */

import React, { useEffect, useState } from "react";
import DataBase from "../DataBase";

function useAutenticacion() {
  const [usuarioAutenticado, guardarUsuarioAutenticado] = useState(null);

  useEffect(() => {
    const unsuscribe = DataBase.auth.onAuthStateChanged((user) => {
      if (user) {
        guardarUsuarioAutenticado(user);
      } else {
        guardarUsuarioAutenticado(null);
      }
    });
    return () => unsuscribe();
  }, []);

  return usuarioAutenticado;
}
export default useAutenticacion;
