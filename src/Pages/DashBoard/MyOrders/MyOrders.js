import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hookis/useAuth";

const MyOrders = () => {
  const { user, token } = useAuth();
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(
      `https://rocky-plateau-46145.herokuapp.com/purchase?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email, token]);

  const handelCancelBooking = (id) => {
    const proceed = window.confirm("Are you sure you want to cancle this");
    if (proceed) {
      const url = `https://rocky-plateau-46145.herokuapp.com/purchase?email=${user.email}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount) {
            const remaining = orders.filter((order) => order._id !== id);
            setOrders(remaining);
            setSuccess(true);
          }
        });
    }
  };

  return (
    <div>
      <h2> My orders</h2>
      {!orders.length ? (
        <div>
          <h3>You currently do not have any order.</h3>
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
                    className="common-button me-2"
                    onClick={() => handelCancelBooking(order._id)}
                  >
                    Cancel-booking
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      {success ? (
        <div className="alert alert-success" role="alert">
          Successfully cancel booking
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MyOrders;
