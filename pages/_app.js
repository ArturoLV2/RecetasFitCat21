/** @format */
import "../App.css";
import App from "next/app";
import DataBase, { FirebaseContext } from "../DataBase";
import useAutenticacion from "../hooks/useAutenticacion";

const MyApp = (props) => {
  const usuario = useAutenticacion();
  const { Component, pageProps } = props;

  return (
    <FirebaseContext.Provider
      value={{
        DataBase,
        usuario,
      }}
    >
      <Component {...pageProps} />
    </FirebaseContext.Provider>
  );
};

export default MyApp;
