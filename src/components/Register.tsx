import { FormEvent, useState } from "react";
import AuthInput from "./AuthInput";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [re_pass, setRePass] = useState("");
  //? 1. react hook form

  const signUp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      name,
      email,
    });
  };
  return (
    <div className="flex justify-center">
        <form
          onSubmit={(event) => signUp(event)}
          className="flex flex-col mt-44 w-2/6 rounded-lg shadow-lg bg-white">
          <h2 className="my-5 text-4xl font-semibold text-center">Sign In</h2>
          <br />
          <AuthInput type="text" placeholder="Username" value={name} change={setName} />
          <AuthInput type="email" placeholder="Email" value={email} change={setEmail} />
          <AuthInput type="password" placeholder="Password" value={pass} change={setPass} />
          <AuthInput type="password" placeholder="Retype Password" value={re_pass} change={setRePass} />
          <button
            type="submit"
            className="w-48 mx-auto mb-5 border-2 border-gray-300 rounded-md focus:outline-none hover:bg-gray-100">
            Sign In
          </button>
        </form>
      </div>
  );
};

export default Register;
