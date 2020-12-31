/** @format */

import React, { useContext } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { FirebaseContext } from "../../DataBase";

const Navegacion = () => {
	const { usuario } = useContext(FirebaseContext);

	return (
		<>
			<Link href="/">
				<a id="NavInicio">Inicio</a>
			</Link>
			<Link href="/populares">
				<a id="NavPopulares">Populares</a>
			</Link>
			{usuario && (
				<Link href="/nuevo-producto">
					<a id="NavNewProduct">Nuevo producto</a>
				</Link>
			)}
		</>
	);
};

export default Navegacion;
