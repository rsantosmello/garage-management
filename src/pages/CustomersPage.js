import React from "react";
import { useState, useEffect } from "react";
import useStore from "../store/store";

export function CustomersPage() {
    const { setShowCustomerModal } = useStore();
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        fetch("https://localhost:7211/api/customers/GetAll")
            .then((res) => res.json())
            .then((data) => setCustomers(data));
    }, []);

    return (
        <div>
            <h1>Customers</h1>
            <button onClick={() => setShowCustomerModal(true)}>Add Customer</button>
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>{customer.nome}</li>
                ))}
            </ul>
        </div>
    );
}
export default CustomersPage;
