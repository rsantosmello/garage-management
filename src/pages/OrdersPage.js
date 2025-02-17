import React from "react";
import { useState, useEffect } from "react";
import useStore from "../store/store";

export function OrdersPage() {
    const { setShowOrderModal } = useStore();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7211/api/orders/GetAll")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    return (
        <div>
            <h1>Orders</h1>
            <button onClick={() => setShowOrderModal(true)}>Add Order</button>
            <ul>
                {orders.map((order) => (
                    <li key={order.orderId}>{order.description}</li>
                ))}
            </ul>
        </div>
    );
}
export default OrdersPage;
