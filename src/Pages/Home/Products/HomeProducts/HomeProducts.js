import React from "react";
import { Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const HomeProducts = ({ product }) => {
  const { _id, productName, img, price, description } = product;
  const navigate = useNavigate();
  const handelProducts = () => {
    navigate(`/purchase/${_id}`);
  };
  return (
    <Col>
      <Card className="rounded h-100 shadow">
        <Card.Img className="w-75 h-50 mx-auto" variant="top" src={img} />
        <Card.Body>
          <Card.Title className="my-3">{productName}</Card.Title>
          <Card.Text className="text-start h-50">
            {description.slice(0, 198)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-around align-items-center">
          <p className="pt-3">Price: $ {price}</p>
          <button onClick={handelProducts} className="common-button">
            Buy-Now
          </button>
        </Card.Footer>
      </Card>
    </Col>
  );
};
export default HomeProducts;
