import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../../Hookis/useAuth";
import Navigation from "../../Sheared/Navigation/Navigation";
import "./DashBoard.css";

const DashBoard = () => {
  const { admin } = useAuth();
  return (
    <div>
      <Navigation></Navigation>
      <Container className="py-5">
        <Row>
          <Col xs={10} md={2}>
            <nav className="text-start dash-nav-custom ">
              <ul className="nav flex-column ">
                <li className="nav-item">
                  <Link
                    to="/dashboard/"
                    className="nav-link active"
                    aria-current="page"
                  >
                    My Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/giveReview" className="nav-link">
                    Give Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/dashboard/payment" className="nav-link">
                    Payment
                  </Link>
                </li>
                {admin && (
                  <>
                    <li className="nav-item">
                      <Link
                        to="/dashboard/manageAllProducts"
                        className="nav-link"
                      >
                        Manage All Products
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/addProduct" className="nav-link">
                        Add A Product
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/manageOrders" className="nav-link">
                        Manage Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/makeAdmin" className="nav-link">
                        Make Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/dashboard/givereview" className="nav-link">
                        Disabled
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </Col>
          <Col xs={10} md={8}>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashBoard;
