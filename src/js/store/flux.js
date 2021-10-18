const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [],
			peopleDetail: {},
			vehicles: [],
			vehiclesDetail: {},
			planets: [],
			planetsDetail: {},
			favoritos: []
		},
		actions: {
			getPeople: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(result => {
						setStore({ people: result.results });
						/*console.log(store.people);*/
					})
					.catch(error => console.log("error", error));
			},
			getPeopleDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/people/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ peopleDetail: result.result.properties });
						/*console.log("peopleDetail", store.peopleDetail);*/
					})
					.catch(error => console.log("error", error));
			},
			getPlanets: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets")
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
						/*console.log(store.planets);*/
					})
					.catch(errorplanets => console.log("error", errorplanets));
			},
			getPlanetsDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/planets/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ planetsDetail: result.result.properties });
						/*console.log("peopleDetail", store.planetsDetail);*/
					})
					.catch(error => console.log("error", error));
			},
			getVehicles: () => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles")
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
						/*console.log(store.vehicles);*/
					})
					.catch(errorvehicles => console.log("error", errorvehicles));
			},
			getVehiclesDetail: uid => {
				const store = getStore();
				fetch("https://www.swapi.tech/api/vehicles/" + uid)
					.then(response => response.json())
					.then(result => {
						setStore({ vehiclesDetail: result.result.properties });
						/*console.log("peopleDetail", store.vehiclesDetail);*/
					})
					.catch(error => console.log("error", error));
			},
			addFavoritos: name => {
				const store = getStore();
				setStore({
					favoritos: [...store.favoritos, name]
				});
			},
			deleteFavorites: posicion => {
				const store = getStore();
				const favoriteDeleted = store.favoritos.filter(key => key !== posicion);
				setStore({ favoritos: favoriteDeleted });
			}
		}
	};
};

export default getState;
