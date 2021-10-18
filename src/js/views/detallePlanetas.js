import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallePlanetas = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getPlanetsDetail(theid);
	}, []);

	return (
		<div className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938" }}>
			<h1>Name: {store.planetsDetail.name}</h1>
			<h1>Diameter: {store.planetsDetail.diameter}</h1>
			<h1>Population: {store.planetsDetail.population}</h1>
			<h1>Terrain: {store.planetsDetail.terrain}</h1>

			<div className="text-center mt-5">
				<Link to={"/planetas"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Planets
					</a>
				</Link>
			</div>
		</div>
	);
};
