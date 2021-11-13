import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../Hookis/useAuth";
import Navigation from "../Sheared/Navigation/Navigation";

const Purchase = () => {
  const perams = useParams();
  // console.log(perams.id);
  const [product, setProduct] = useState({});
  const { user } = useAuth();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userPurchase = {
      ...data,
      productId: perams.id,
      productName: product.productName,
      price: product.price,
      status: "pending",
    };
    // console.log(userPurchase);

    fetch("https://rocky-plateau-46145.herokuapp.com/purchase", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userPurchase),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("successfully added");
        }

        reset();
        navigate("/dashboard/");
      });
  };

  useEffect(() => {
    const url = `https://rocky-plateau-46145.herokuapp.com/products/${perams.id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [perams.id]);

  return (
    <div>
      <Navigation></Navigation>
      <Container className="my-5">
        <h2>This is Purchase page</h2>

        <form
          className="d-flex flex-column justify-content-center align-items-center
                "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form-control mt-5 mb-3 w-50"
            type="email"
            placeholder="e-mail"
            defaultValue={user.email}
            {...register("email", { required: true })}
          />
          {errors.email?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="text"
            defaultValue={user.displayName}
            placeholder="Name"
            {...register("displayName", { required: true })}
          />
          {errors.displayName?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="text"
            placeholder="Address"
            {...register("address", { required: true })}
          />
          {errors.address?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="number"
            placeholder="Phone"
            {...register("phone", { required: true })}
          />
          {errors.phone?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="text"
            placeholder={product.productName}
            disabled
          />

          <input
            className="form-control mb-3  w-50"
            type="text"
            placeholder={product.price}
            disabled
          />

          <input className="w-50 common-button" type="submit" />
        </form>
      </Container>
    </div>
  );
};

export default Purchase;
