/** @format */

import React, { useState } from "react";
import Router from "next/router";

const Buscar = () => {
	const [busqueda, guardarBusqueda] = useState("");

	const buscarProducto = (e) => {
		e.preventDefault();

		if (busqueda.trim() === "") return;

		// redireccionar a /buscar
		Router.push({
			pathname: "/buscar",
			query: { q: busqueda },
		});
	};

	return (
		<form id="NavFormItem" onSubmit={buscarProducto}>
			<input
				type="text"
				placeholder="Buscar Productos"
				onChange={(e) => guardarBusqueda(e.target.value)}
			/>

			<button type="submit">Buscar</button>
		</form>
	);
};

export default Buscar;
