import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hookis/useAuth";

const GIveReview = () => {
  const [success, setSuccess] = useState(false);
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, user: user.displayName };
    // console.log(newData);
    const url = `https://rocky-plateau-46145.herokuapp.com/reviews`;
    axios.post(url, newData).then((res) => {
      if (res.data.insertedId) {
        setSuccess(true);
        reset();
      }
    });

    reset();
  };

  return (
    <div>
      <h2>Please give a review</h2>
      <form
        className="d-flex flex-column justify-content-center align-items-center
                "
        onSubmit={handleSubmit(onSubmit)}
      >
        <textarea
          placeholder="Description"
          className="form-control my-3  w-50 "
          {...register("description", {})}
        />
        {errors.description?.type === "required" && "This Field is required"}

        <input
          className="form-control my-3  w-50"
          type="number"
          placeholder="rating from 1-5"
          {...register("rating", { min: 0, max: 5 })}
        />
        {errors.rating?.type === "required" && "This Field is required"}

        <input className="w-50 common-button mb-5" type="submit" />
      </form>
      {success ? (
        <div className="alert alert-success" role="alert">
          Successfully reviewed
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default GIveReview;
