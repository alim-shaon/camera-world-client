import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import Footer from "../../Sheared/Footer/Footer";
import Navigation from "../../Sheared/Navigation/Navigation";
import SingleProduct from "../SingleProduct/SingleProduct";

const Allproducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "https://rocky-plateau-46145.herokuapp.com/allproducts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <Navigation></Navigation>
      {!products.length ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden"> Loading...</span>
        </Spinner>
      ) : (
        <Container>
          <h2 className="text-start py-5">All of Our Products</h2>
          <Row xs={1} md={1} className="g-4">
            {products.map((product) => (
              <SingleProduct
                key={product._id}
                product={product}
              ></SingleProduct>
            ))}
          </Row>
        </Container>
      )}

      <Footer></Footer>
    </div>
  );
};

export default Allproducts;
