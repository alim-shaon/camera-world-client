import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import HomeProducts from "./HomeProducts/HomeProducts";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://rocky-plateau-46145.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {!products.length ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden"> Loading...</span>
        </Spinner>
      ) : (
        <Container className="my-5">
          <div className="d-flex align align-items-center my-4 pt-4">
            <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
            <h1>Our Packages</h1>
            <hr className="mx-3 opacity-100 flex-grow-1 common-color" />
          </div>
          <Row xs={1} md={3} className="g-4">
            {products.map((product) => (
              <HomeProducts key={product._id} product={product}></HomeProducts>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Products;
