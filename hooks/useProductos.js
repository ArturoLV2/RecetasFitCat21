/** @format */

import React, { useState, useEffect, useContext } from "react";
import { FirebaseContext } from "../DataBase";

const useProductos = (orden) => {
  const [productos, guardarProductos] = useState([]);

  const { DataBase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerProductos = () => {
      DataBase.db
        .collection("productos")
        .orderBy(orden, "desc")
        .onSnapshot(manejarSnapshot);
    };
    obtenerProductos();
  }, []);

  function manejarSnapshot(snapshot) {
    const productos = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    guardarProductos(productos);
  }

  return {
    productos,
  };
};

export default useProductos;
