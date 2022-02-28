import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import { Context } from "../store/appContext";

export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [newContact, setNewContact] = useState({ name: "", email: "", phone: "", address: "" });
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							name={newContact.name}
							onChange={e => setNewContact({ ...newContact, name: e.target.value })}
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
							type="text"
							className="form-control"
							placeholder="Enter address"
						/>
					</div>

					<button
						onClick={() => {
							// browserHistory.push("/");
							actions.addContact(newContact);
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
