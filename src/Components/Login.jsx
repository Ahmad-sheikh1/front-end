import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { GoEyeClosed } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { Login_MU } from "../GraphQl/Mutations";
import { useMutation } from "@apollo/client";
import { useSelector, useDispatch } from "react-redux";
import { UserData } from "../store/Slices/UserData";
import Cookies from 'js-cookie';


const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [Login_Data] = useMutation(Login_MU);


  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleSignIn = async (data) => {
    console.log(data);
    try {
      const { data: responseData } = await Login_Data({
        variables: {
          email: data.Email, // Use the form data here
          password: data.Password // Use the form data here
        },
      });

      if (responseData.UserLogin.success) {
        console.log('Login Successful:', responseData.UserLogin);
        dispatch(UserData(responseData.UserLogin))
        Cookies.set('token', responseData.UserLogin.token, { expires: 1, path: '/' });
        navigate("/createform");
      } else {
        console.error('Login Failed:', responseData.UserLogin.message);
      }
    } catch (error) {
      console.error('Error during Login:', error);
    }
  };




  return (
    <div className="flex items-center justify-center min-h-screen mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-[90%]">
        <div className="text-center mb-6">
          <img src="/logo-drpos.png" alt="" className="m-auto" />
          <p className="text-gray-500 pt-4">Hello! Log in with your email.</p>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)}>
          <div className="mb-8 w-[40%] m-auto">
            <label htmlFor="email" className="block text-gray-700 pb-3">
              Email address:
            </label>
            <input
              id="email"
              type="email"
              className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? 'border-red-500' : ''}`}
              {...register("Email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Email is not valid" } })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="mb-4 relative w-[40%] m-auto">
            <label htmlFor="password" className="block text-gray-700 pb-3">
              Password:
            </label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className={`w-full px-4 py-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? 'border-red-500' : ''}`}
              {...register("Password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } })}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-14 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <GoEyeClosed />}
            </span>
          </div>
          <button
            type="submit"
            className="items-center gap-2 w-[40%] flex justify-center m-auto mt-8 bg-green-400 text-white py-4 text-xl rounded-lg hover:bg-green-500 transition duration-300"
          >
            <FaArrowRight />
            SIGN IN
          </button>
        </form>

        <div className="text-center my-4">
          <span className="text-gray-500">OR</span>
        </div>
        <button
          type="submit"
          className="items-center gap-2 w-[40%] flex justify-center m-auto mt-8 bg-blue-500 text-white py-5 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          <BsFillPersonPlusFill className="text-2xl" />
          CREATE NEW ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default Login;
