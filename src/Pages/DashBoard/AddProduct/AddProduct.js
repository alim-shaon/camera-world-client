import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data };
    const url = `https://rocky-plateau-46145.herokuapp.com/addProduct`;
    axios.post(url, newData).then((res) => {
      if (res.data.insertedId) {
        setSuccess(true);
        reset();
      }
    });
  };
  return (
    <div>
      <Container className="my-5">
        <h1 className="mt-5">Add New Packages</h1>
        <form
          className="d-flex flex-column justify-content-center align-items-center
                "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="form-control mt-5 mb-3 w-50"
            type="text"
            placeholder="productName"
            {...register("productName", { required: true })}
          />
          {errors.productName?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="text"
            placeholder="Image-Url"
            {...register("img", { required: true })}
          />
          {errors.img?.type === "required" && "This Field is required"}

          <input
            className="form-control my-3  w-50"
            type="number"
            placeholder="Price"
            {...register("price", { required: true })}
          />
          {errors.price?.type === "required" && "This Field is required"}

          <textarea
            placeholder="Description"
            className="form-control my-3  w-50 "
            {...register("description", {})}
          />
          {errors.description?.type === "required" && "This Field is required"}
          <input className="w-50 common-button mb-5" type="submit" />
        </form>

        {success ? (
          <div className="alert alert-success" role="alert">
            Successfully added
          </div>
        ) : (
          <div></div>
        )}
      </Container>
    </div>
  );
};

export default AddProduct;
<h2>Add a product</h2>;
