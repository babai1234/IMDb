import Login from "@components/Login";
import Register from "@components/Register";
import Test from "@components/Test";
import { useState } from "react";

const auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-gray-100 h-screen">
      {isLogin ? <Login /> : <Register />}
      <div>
        {/* <Test username="KOle" profilePic="" /> */}
        {isLogin ? (
          <p className="text-center mt-4">
            Not Registered?{" "}
            <span 
              onClick={() => setIsLogin(false)}
              className="cursor-pointer text-blue-600">
              Register
            </span>
          </p>
        ) : (
          <p className="text-center mt-4">
            Already Registered?{" "}
            <span 
              onClick={() => setIsLogin(true)}
              className="cursor-pointer text-blue-600">
              Login
            </span>
          </p>
        )}
      </div>
    </div>
  )
}

export default auth;
