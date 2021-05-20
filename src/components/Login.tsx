import { FormEvent, useState } from "react";
import Navbar from "../components/Navbar";
import AuthInput from "./AuthInput";

const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const signIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Username: " + name + "\nPassword: " + pass);
  };
  return (
    <div>
      <div className="fixed top-0 left-0 z-10 w-full">
        <Navbar />
      </div>
      <div className="flex justify-center">
        <form
          onSubmit={(event) => signIn(event)}
          className="flex flex-col mt-52 w-2/6 rounded-lg shadow-lg bg-white">
          <h2 className="my-5 text-4xl font-semibold text-center">Sign In</h2>
          <br />
          <AuthInput type="text" placeholder="Username" value={name} change={setName} />
          <AuthInput type="password" placeholder="Password" value={pass} change={setPass} />
          <button
            type="submit"
            className="w-48 mx-auto mb-5 border-2 border-gray-300 rounded-md focus:outline-none hover:bg-gray-100">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
