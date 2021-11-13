import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hookis/useAuth";

const ManageOrders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    fetch("https://rocky-plateau-46145.herokuapp.com/allpurchase", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [token]);
  // console.log(orders);

  const handelChangeStatus = (id) => {
    const order = orders.find((order) => order._id === id);
    const bookingUpdate = { ...order };
    bookingUpdate.status = "approved";
    const url = `https://rocky-plateau-46145.herokuapp.com/allpurchase/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingUpdate),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        // console.log("clicked", id);

        if (data.modifiedCount > 0) {
          alert("status Updated");

          // the browser will do a complete page refresh from the server and not from the cached version of the page to show the status change.
          window.location.reload(false);
        }
      });
  };

  return (
    <div>
      <div>
        <h2>Manage users order</h2>
        {!orders.length ? (
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Purchased Product</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order.displayName}</td>
                  <td>{order.email}</td>
                  <td>{order.phone}</td>
                  <td>{order.productName}</td>
                  <td>{order.status}</td>
                  <td>
                    <button
                      onClick={() => handelChangeStatus(order._id)}
                      className="common-button"
                    >
                      Change-Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
