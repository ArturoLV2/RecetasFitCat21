/** @format */

import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import Buscar from "../ui/Buscar";
import Navegacion from "./Navegacion";
import Boton from "../ui/Boton";
import { FirebaseContext } from "../../DataBase";

const Header = () => {
  const { usuario, DataBase } = useContext(FirebaseContext);

  return (
    <header>
      <Link href="/">
        <img src="/static/img/logo.png" alt="Logo" />
      </Link>

      <Buscar />

      <Navegacion />

      {usuario ? (
        <>
          <p>Hola: {usuario.displayName}</p>
          <span onClick={() => DataBase.cerrarSesion()}>Cerrar Sesión</span>
        </>
      ) : (
        <>
          <Link href="/login">
            <span id="NavLogin">Inicia Sesión </span>
          </Link>
          <Link href="/crear-cuenta">
            <span id="NavCreate">Registrate </span>
          </Link>
        </>
      )}
    </header>
  );
};

export default Header;
