import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hookis/useAuth";
import loginImg from "../../../images/login.jpg";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const location = useLocation();
  const navigate = useNavigate();

  const { user, isLoading, authError, loginUsingEmail } = useAuth();
  const onSubmit = (data) => {
    // console.log(data);
    loginUsingEmail(data.email, data.password, location, navigate);
    reset();
  };
  return (
    <div>
      <Container className="my-5">
        <Row xs={1} md={2}>
          <Col>
            <img className="w-75" src={loginImg} alt="" />
          </Col>
          {/* react hook form */}
          <Col>
            {!isLoading && (
              <form
                className="d-flex flex-column justify-content-center align-items-center
                "
                onSubmit={handleSubmit(onSubmit)}
              >
                <input
                  className="form-control mt-5 mb-3 w-50"
                  type="email"
                  placeholder="e-mail"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && "This Field is required"}

                <input
                  className="form-control my-3  w-50"
                  type="password"
                  placeholder="password"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" &&
                  "This Field is required"}

                <input className="w-50 common-button" type="submit" />

                <NavLink
                  to="/register"
                  className="w-50 common-button p-0 my-3"
                  style={{ textDecoration: "none" }}
                >
                  <button className="common-button">
                    New User? Please Register
                  </button>
                </NavLink>
              </form>
            )}
            {isLoading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {user?.email ? (
              <div className="alert alert-success" role="alert">
                Successfully Loged in
              </div>
            ) : (
              <div></div>
            )}

            {authError ? (
              <div className="alert alert-danger" role="alert">
                {authError}
              </div>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
