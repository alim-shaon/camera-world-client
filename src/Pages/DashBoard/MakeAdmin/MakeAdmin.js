import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hookis/useAuth";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const user = { email: data.email };
    // console.log(user);
    // console.log(token);
    fetch("https://rocky-plateau-46145.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          setSuccess(true);
        }
      });
    reset();
  };

  return (
    <div>
      <h2>This is make admin page</h2>

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

        <input className="w-50 common-button mb-3" type="submit" />
      </form>
      {success ? (
        <div className="alert alert-success" role="alert">
          admin make successful
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MakeAdmin;
