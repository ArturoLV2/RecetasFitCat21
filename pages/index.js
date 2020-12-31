/** @format */

import React from "react";
import Layout from "../components/layout/Layout";
import DetallesProducto from "../components/layout/DetallesProducto";
import useProductos from "../hooks/useProductos";

const Home = () => {
  const { productos } = useProductos("creado");

  return (
    <div>
      <Layout>
        {productos.map((producto) => (
          <DetallesProducto key={producto.id} producto={producto} />
        ))}
      </Layout>
    </div>
  );
};

export default Home;
