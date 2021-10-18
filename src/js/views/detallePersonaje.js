import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const DetallePersonaje = () => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();

	useEffect(() => {
		actions.getPeopleDetail(theid);
	}, []);

	return (
		<div id="divDetalle" className="text-center mt-5" style={{ color: "rgba(102, 96, 96, 0.938" }}>
			<h1>Name : {store.peopleDetail.name}</h1>
			<h3>Hair Color : {store.peopleDetail.hair_color}</h3>
			<h3>Skin Color : {store.peopleDetail.skin_color}</h3>
			<h3>Eye Color : {store.peopleDetail.eye_color}</h3>
			<h3>Height : {store.peopleDetail.height}</h3>
			<h3>Birth Year : {store.peopleDetail.birth_year}</h3>

			<div className="text-center mt-5">
				<Link to={"/personajes"}>
					<a href="#" className="btn btn-warning text-dark">
						Back to Characters
					</a>
				</Link>
			</div>
		</div>
	);
};
