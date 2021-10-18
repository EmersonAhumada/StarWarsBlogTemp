import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "../../styles/home.scss";

export const CardPersonas = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<>
			{store.people.map((person, position) => {
				return (
					<div className=" col-xs-12 col-sm-6 col-md-4 col-lg-3" key={position}>
						<div className="card m-1">
							<div className="card-body">
								<h5 className="card-title">{person.name}</h5>
								<p className="card-text">
									{/* {person.uid} */}
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
									doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
									veritatis et quasi architecto beatae vitae dicta sunt explicabo.
								</p>
								<Link to={"/detallePersonaje/" + person.uid}>
									<a href="#" className="btn btn-warning text-dark">
										More Info
									</a>
								</Link>

								<a href="#" className="btn btn-outline-warning float-right">
									<i
										className="fas fa-heart text-warning"
										onClick={() => {
											actions.addFavoritos(person.name);
										}}
									/>
								</a>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};
