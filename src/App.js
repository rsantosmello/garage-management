import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CustomersPage from "./pages/CustomersPage";
import OrdersPage from "./pages/OrdersPage";
import AddEditCustomerModal from "./components/AddEditCustomerModal";
import AddEditOrderModal from "./components/AddEditOrderModal";
import useStore from "./store/store";

function App() {
  const { showCustomerModal, showOrderModal, setShowCustomerModal, setShowOrderModal } = useStore();
  
  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white flex gap-4">
        <Link to="/customers">Customers</Link>
        <Link to="/orders">Orders</Link>
      </nav>
      <div className="p-4">
        <Routes>
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/orders" element={<OrdersPage />} />          
        </Routes>
      </div>
      {showCustomerModal && <AddEditCustomerModal onClose={() => setShowCustomerModal(false)} />}
      {showOrderModal && <AddEditOrderModal onClose={() => setShowOrderModal(false)} />}
    </Router>
  );
}

export default App;