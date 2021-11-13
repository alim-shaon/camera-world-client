import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <div className="banner pb-5">
        <Container className="py-5 mb-5 text-white text-center">
          <h1 className="pt-5 mt-5">
            Welcome to{" "}
            <span className="fw-bolder common-color">Camera-World</span>
          </h1>
          <p className="py-4 fw-bold">
            We offer a wide range of oppertunities to attact our Coustomer{" "}
            <br />
            Book your Next Adventure From World-Tour
          </p>
          <Link to="/products">
            <button className="common-button">Browse-more </button>
          </Link>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
