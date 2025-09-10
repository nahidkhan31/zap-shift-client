import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="card-body">
        <h1 className="text-5xl font-bold">Create An Account!!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            {/* name */}
            {/* <label className="label">Name</label>
            <input
              type="name"
              {...register("name", { required: true })}
              className="input"
              placeholder="Name"
            /> */}
            {/* email field */}
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p className="text-red-500">Email Address is required.</p>
            )}
            {/* password field */}
            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", { required: true, minLength: 6 })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-500">Password is required.</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-500">
                Password must be 6 characters or longer.
              </p>
            )}
          </fieldset>
          <button className="btn btn-neutral mt-4">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
