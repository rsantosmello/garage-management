import React from "react";
import { useState } from "react";

export function AddEditOrderModal({ onClose }) {
    const [order, setOrder] = useState({ customerId: "", description: "", price: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("https://localhost:7211/api/orders/Add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        });
        onClose();
    };

    return (
        <div className="modal">
            <h2>Add/Edit Order</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Customer ID" value={order.customerId} onChange={(e) => setOrder({ ...order, customerId: e.target.value })} />
                <input type="text" placeholder="Description" value={order.description} onChange={(e) => setOrder({ ...order, description: e.target.value })} />
                <input type="text" placeholder="Price" value={order.price} onChange={(e) => setOrder({ ...order, price: e.target.value })} />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
}
export default AddEditOrderModal;
