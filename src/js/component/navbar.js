import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownButton, Navbar, Image, NavbarBrand } from "react-bootstrap";

export const Navbar1 = () => {
	return (
		<Navbar expand="lg">
			<NavbarBrand>
				<Link to="/">
					<Image
						src="https://w7.pngwing.com/pngs/723/1016/png-transparent-star-wars-logo-star-wars-text-logo-silhouette.png"
						weight="80"
						height="80"
						alt="Starwars"
					/>
				</Link>
			</NavbarBrand>
			<Dropdown />
			<Dropdown className="mr-2">
				<DropdownButton id="dropdown-basic-button" title="Favoritos" className="">
					<Dropdown.Item href="#/action-1">Tus Personas</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#/action-2">Tus Planetas</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#/action-3">Tus Vehiculos</Dropdown.Item>
				</DropdownButton>
			</Dropdown>
		</Navbar>
	);
};
