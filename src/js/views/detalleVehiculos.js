import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetalleVehiculos = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getVehiclesDetail(theid);
	}, []);

	return (
		<div className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938" }}>
			<h1>Name : {store.vehiclesDetail.name}</h1>
			<h3>Model : {store.vehiclesDetail.model}</h3>
			<h3>Manufacturer : {store.vehiclesDetail.manufacturer}</h3>
			<h3>Length : {store.vehiclesDetail.length}</h3>
			<h3>Vehicle Class : {store.vehiclesDetail.vehicle_class}</h3>
			<h3>Max atmosphering speed : {store.vehiclesDetail.max_atmosphering_speed}</h3>

			<div className="text-center mt-5">
				<Link to={"/vehiculos"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Vehicles
					</a>
				</Link>
			</div>
		</div>
	);
};
