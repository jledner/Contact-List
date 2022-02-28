const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			agenda: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getData: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/jled")
					.then(response => {
						console.log(response);
						if (!response.ok) {
							throw Error(response.statusText);
						}

						return response.json();
					})
					.then(data => {
						console.log(data);
						setStore({ agenda: data });
					})
					.catch(error => {
						console.log("Looks like there was a problem: \n", error);
					});
			},

			addContact: contact => {
				//get the store
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				// const newAgenda = getStore().agenda;
				// newAgenda.push(contact);
				// //reset the global store
				// setStore({ agenda: newAgenda });
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "jled",
						full_name: contact.name,
						address: contact.address,
						phone: contact.phone,
						email: contact.email
					})
				})
					.then(res => res.json())
					.then(() => {
						getActions().getData();
					});
			},
			deleteContact: id => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "DELETE"
				})
					.then(res => res.json())
					.then(() => {
						getActions().getData();
					});
			},
			editContact: contact => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "PUT",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						agenda_slug: "jled",
						full_name: contact.name,
						address: contact.address,
						phone: contact.phone,
						email: contact.email
					})
				})
					.then(res => res.json())
					.then(() => {
						getActions().getData();
					});
			}
		}
	};
};

export default getState;
