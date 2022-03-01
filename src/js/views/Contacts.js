import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext";

export const Contacts = () => {
	const { store, actions } = useContext(Context);
	const [state, setState] = useState({
		showModal: false,
		contactToDelete: null
	});

	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.agenda
							? store.agenda.map((item, index) => {
									console.log(item);
									return (
										<span key={index}>
											<ContactCard
												contact={item}
												key={index}
												onDelete={
													() =>
														setState({
															showModal: true,
															contactToDelete: item.id
														})
													// ={() =>
													// 	setState({
													// 		showModal: true,
													// 		contactToDelete: item.id
													// 	})
												}
											/>
										</span>
									);
							  })
							: "loading..."}
					</ul>
				</div>
			</div>
			<Modal
				show={state.showModal}
				id={state.contactToDelete}
				onClose={() => setState({ showModal: false, contactToDelete: null })}
			/>
		</div>
	);
};
