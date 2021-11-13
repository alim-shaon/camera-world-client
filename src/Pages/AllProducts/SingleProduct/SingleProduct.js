import React from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router";

const SingleProduct = ({ product }) => {
  const { _id, productName, img, price, description } = product;
  const navigate = useNavigate();
  const handelProducts = () => {
    navigate(`/purchase/${_id}`);
  };

  return (
    <Col className="my-4 shadow">
      <Row xs={1} md={2}>
        <Col xs={10} md={4}>
          <img className="w-75" src={img} alt="" />
        </Col>
        <Col xs={10} md={8} className="text-start my-3">
          <h3 className="py-4">{productName}</h3>
          <p>{description}</p>
          <p>
            <span className="fw-bold">Price: </span>$ {price}
          </p>
          <button onClick={handelProducts} className="common-button">
            Buy-Now
          </button>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleProduct;
