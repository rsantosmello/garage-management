import React from "react";
import { useState } from "react";

export function AddEditCustomerModal({ onClose }) {
    const [customer, setCustomer] = useState({ nome: "", address: "", fone: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://localhost:7211/api/customers/Add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(customer),
        });
        onClose();
    };

    return (
        <div className="modal">
            <h2>Add/Edit Customer</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={customer.nome} onChange={(e) => setCustomer({ ...customer, nome: e.target.value })} />
                <input type="text" placeholder="Address" value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} />
                <input type="text" placeholder="Phone" value={customer.fone} onChange={(e) => setCustomer({ ...customer, fone: e.target.value })} />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}
export default AddEditCustomerModal;
