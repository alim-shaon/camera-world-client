import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

const ManageAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const url = "https://rocky-plateau-46145.herokuapp.com/allproducts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handelDeleteProduct = (id) => {
    const proceed = window.confirm("Are you sure you want to cancle this");
    if (proceed) {
      const url = `https://rocky-plateau-46145.herokuapp.com/allproducts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (data.deletedCount) {
            const remaining = products.filter((order) => order._id !== id);
            setProducts(remaining);
            setSuccess(true);
          }
        });
    }
  };
  return (
    <div>
      <Row xs={1}>
        {products.map((product) => (
          <Col key={product._id} className="my-4 shadow">
            <Row xs={1} md={2}>
              <Col xs={10} md={4}>
                <img className="w-75" src={product.img} alt="" />
              </Col>
              <Col xs={10} md={8} className="text-start my-3">
                <h3 className="py-4">{product.productName}</h3>
                <p>{product.description}</p>
                <p>
                  <span className="fw-bold">Price: </span>$ {product.price}
                </p>
                <button
                  onClick={() => handelDeleteProduct(product._id)}
                  className="common-button"
                >
                  Delete Product
                </button>
              </Col>
            </Row>
          </Col>
        ))}
        {success ? (
          <div className="alert alert-success" role="alert">
            Successfully cancel booking
          </div>
        ) : (
          <div></div>
        )}
      </Row>
    </div>
  );
};

export default ManageAllProducts;
