import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useForm } from "react-hook-form";
import { BiLoaderAlt } from "react-icons/bi";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";

import AuthInput from "@components/AuthInput";
import { AuthContext } from "src/Context/auth.context";
import { registrationSchema, loginSchema } from "@libs/validationSchema";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const { push } = useRouter();
  const [schema, setSchema] = useState(loginSchema)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [activeForm, setActiveForm] = useState<"Log in" | "Register">("Log in");

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {setIsAuthenticated} = useContext(AuthContext)

  const handleClick = async (formData: any) => {
    try {
      setLoading(true);
      // const { data } = await axios({
      //   method: "POST",
      //   url: activeForm === "Log in" ? "api/auth/login" : "api/auth/signup",
      //   data: formData,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });
      console.log({ formData });
      setIsAuthenticated(true)
      router.push("/");
      //   cookie.set("user", res.data);
    } catch (error) {
      setErrorMessage(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  // TODO add validation(errors) in form
  const changeActiveForm = () => {
    activeForm === "Log in"
      ? setActiveForm("Register")
      : setActiveForm("Log in");
    
    activeForm === "Log in"
      ? setSchema(registrationSchema)
      : setSchema(loginSchema)
  };

  return (
    <div className="grid h-screen grid-cols-8 text-white">
      {/* left part */}
      <div className="hidden col-span-3 p-4 text-gray-800 bg-yellow-500 md:grid place-items-center">
        <h1 className="mb-5 text-3xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
          earum!{" "}
        </h1>
        <div className="w-full h-full ">
          {/* the div as a next image wrapper */}
          <Image
            loading="eager"
            width={200}
            height={180}
            layout="responsive"
            src="/IronMan.jpg"
          />
        </div>
      </div>
      {/* right part */}
      <div className="grid col-span-8 p-2 bg-gray-800 bg-dark-700 md:col-span-5 place-items-center">
        <div className="p-2 space-y-4 w-80 ">
          <h1 className="text-2xl font-bold text-white">Welcome to IMDb</h1>
          <form
            className="flex flex-col w-full space-y-3"
            onSubmit={handleSubmit(handleClick)}
          >
            <AuthInput
              label="Username"
              type="text"
              register={register}
              fieldName="username"
              error={errors.username}
              placeholder="Username"
            />
            {activeForm === "Register" && (
              <AuthInput
                placeholder="Email"
                label="Email"
                type="email"
                register={register}
                fieldName="email"
                error={errors.email}
              />
            )}

            <AuthInput
              label="Password"
              type="password"
              placeholder="Password"
              fieldName="password"
              error={errors.password}
              register={register}
            />

            {activeForm === "Register" && (
              <AuthInput
                label="Retype Password"
                type="password"
                placeholder="Phir se "
                fieldName="repassword"
                error={errors.repassword}
                register={register}
              />
            )}
            <button className="flex items-center justify-center p-2 text-lg font-bold text-gray-800 bg-yellow-500 rounded-md focus:outline-none">
              {!loading ? (
                activeForm
              ) : (
                <BiLoaderAlt className="mr-2 animate-spin" />
              )}
            </button>
          </form>

          {errorMessage && (
            <div className="p-1 text-center text-red-600 border border-red-600">
              {errorMessage}
            </div>
          )}
        </div>

        <div>
          <p className="text-lg tracking-wide text-center text-white">
            {activeForm === "Log in"
              ? " Don't have an account yet? "
              : "Already a member? "}

            <span
              className="font-semibold text-white cursor-pointer"
              onClick={changeActiveForm}
            >
              {activeForm === "Log in" ? " Register " : "Log in "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
