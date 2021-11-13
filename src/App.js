import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Allproducts from "./Pages/AllProducts/AllProducts/Allproducts";
import AddProduct from "./Pages/DashBoard/AddProduct/AddProduct";
import DashBoard from "./Pages/DashBoard/DashBoard/DashBoard";
import GIveReview from "./Pages/DashBoard/GiveRiview/GIveReview";
import MakeAdmin from "./Pages/DashBoard/MakeAdmin/MakeAdmin";
import ManageAllProducts from "./Pages/DashBoard/ManageAllProducts/ManageAllProducts";
import ManageOrders from "./Pages/DashBoard/ManageOrders/ManageOrders";
import MyOrders from "./Pages/DashBoard/MyOrders/MyOrders";
import Payment from "./Pages/DashBoard/Payment/Payment";
import Home from "./Pages/Home/Home/Home";
import AdminRouter from "./Pages/Login/AdminRouter/AdminRouter";
import Login from "./Pages/Login/Login/Login";
import PrivateRouter from "./Pages/Login/PrivateRoute/PrivateRouter";
import Register from "./Pages/Login/Register/Register";
import Purchase from "./Pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Allproducts />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRouter>
                  <DashBoard />
                </PrivateRouter>
              }
            >
              <Route path="/dashboard/" element={<MyOrders />} />

              <Route path="/dashboard/giveReview" element={<GIveReview />} />
              <Route path="/dashboard/payment" element={<Payment />} />
              <Route
                path="/dashboard/manageAllProducts"
                element={
                  <AdminRouter>
                    <ManageAllProducts />
                  </AdminRouter>
                }
              />
              <Route
                path="/dashboard/addProduct"
                element={
                  <AdminRouter>
                    <AddProduct />
                  </AdminRouter>
                }
              />
              <Route
                path="/dashboard/manageOrders"
                element={
                  <AdminRouter>
                    <ManageOrders />
                  </AdminRouter>
                }
              />
              <Route
                path="/dashboard/makeAdmin"
                element={
                  <AdminRouter>
                    <MakeAdmin />
                  </AdminRouter>
                }
              />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/purchase/:id" element={<Purchase />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
