import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	// const { id } = useParams();
	const id = props.match.params.id;
	console.log(id);

	const targetContact = store.agenda.find(item => {
		return item.id === id;
	});
	console.log(targetContact);
	const [newContact, setNewContact] = useState({
		name: targetContact.full_name,
		phone: targetContact.phone,
		address: targetContact.address,
		email: targetContact.email,
		id: targetContact.id
	});
	console.log("newContact");
	console.log(newContact);
	console.log(newContact.id);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name={newContact.name}
							onChange={e => setNewContact({ ...newContact, name: e.target.value })}
							value={newContact.name}
							type="text"
							className="form-control"
							placeholder="Full Name"
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							email={newContact.email}
							onChange={e => setNewContact({ ...newContact, email: e.target.value })}
							value={newContact.email}
							type="email"
							className="form-control"
							placeholder="Enter email"
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							phone={newContact.phone}
							onChange={e => setNewContact({ ...newContact, phone: e.target.value })}
							value={newContact.phone}
							type="phone"
							className="form-control"
							placeholder="Enter phone"
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							address={newContact.address}
							onChange={e => setNewContact({ ...newContact, address: e.target.value })}
							value={newContact.address}
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>

					<button
						onClick={() => {
							// browserHistory.push("/");
							actions.editContact(newContact);
						}}
						type="button"
						className="btn btn-primary form-control">
						save
					</button>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
EditContact.propTypes = {
	match: PropTypes.object
};
