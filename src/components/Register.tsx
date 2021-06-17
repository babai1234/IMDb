import { FormEvent, useState } from "react";
import AuthInput from "./AuthInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "@libs/validationSchema";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(registrationSchema),
  });

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [pass, setPass] = useState("");
  // const [re_pass, setRePass] = useState("");
  //? 1. react hook form

  const signUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <div className="flex justify-center">
      <h2 className="my-5 text-4xl font-semibold text-center">Sign In</h2>
      <br />
      <form
        onSubmit={(event) => signUp(event)}
        className="flex flex-col w-2/6 bg-white rounded-lg shadow-lg mt-44"
      >
        <AuthInput
          type="text"
          placeholder="Username"
          label="Username"
          error={errors.username}
          fieldName="username"
          register={register}
        />
        <AuthInput
          type="email"
          placeholder="Email"
          label="Email"
          error={errors.email}
          fieldName="email"
          register={register}
        />
        <AuthInput
          type="password"
          placeholder="Password"
          label="Password"
          error={errors.password}
          fieldName="password"
          register={register}
        />
        <AuthInput
          type="password"
          placeholder="Retype Password"
          label="Retype Password"
          error={errors.repass}
          fieldName="repass"
          register={register}
        />

        <button
          type="submit"
          className="w-48 mx-auto mb-5 border-2 border-gray-300 rounded-md focus:outline-none hover:bg-gray-100"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Register;
