import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Context/AuthProvider";

const Signup = () => {
  const { signup } = useContext(AuthContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (data) => {
    signup(data);
    reset();
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <input
          {...register("firstname", { required: "please enter firstname" })}
          type="text"
          placeholder="enter firstname"
        />
        <small>{errors?.firstname?.message}</small>
        <input
          {...register("lastname", { required: "please enter lastname" })}
          type="text"
          placeholder="enter lastname"
        />
        <small>{errors?.lastname?.message}</small>
      </div>
      <input
        {...register("username", { required: "please enter username" })}
        type="text"
        placeholder="enter username"
      />
      <small>{errors?.username?.message}</small>
      <input
        {...register("email", { required: "please enter email" })}
        type="email"
        placeholder="enter email"
      />
      <small>{errors?.email?.message}</small>
      <input
        {...register("password", { required: "please enter password" })}
        type="text"
        placeholder="enter password"
      />
      <small>{errors?.password?.message}</small>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default Signup;
