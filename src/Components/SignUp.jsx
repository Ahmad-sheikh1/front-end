import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye, FaArrowRight } from 'react-icons/fa';
import { GoEyeClosed } from 'react-icons/go';
import { gql, useMutation } from "@apollo/client";
import { SIGN_UP } from '../GraphQl/Mutations';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();


  const [SignUpData] = useMutation(SIGN_UP);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const onSubmit = async (data) => {
    try {
      const { data: responseData } = await SignUpData({
        variables: {
          data: {
            FullName: data.FullName,
            Email: data.Email,
            Phone: data.Phone,
            Password: data.Password
          }
        },
      });

      if (responseData.UserSignUp.success) {
        console.log('Sign Up Successful:', responseData.UserSignUp.message);
        navigate('/login')
      } else {
        console.error('Sign Up Failed:', responseData.UserSignUp.message);
      }
    } catch (error) {
      console.error('Error during Sign Up:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[90%] relative">
        <div className="w-[40%] m-auto">
          <img src="/logo-drpos.png" alt="" className="m-auto" />
          <h2 className="text-2xl font-bold mt-6 mb-6">Sign Up</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4 w-[40%] m-auto">
            <label className="block text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register('FullName', { required: 'Full Name is required' })}
              className="w-full py-4 p-2 border border-gray-300 rounded mt-2"
              placeholder="Full Name"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
          </div>

          <div className="flex gap-4 justify-center">
            <div className="mb-4 w-[19.5%]">
              <label className="block text-gray-700">Email</label>
              <input
                type="Email"
                {...register('Email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Invalid email address'
                  }
                })}
                className="w-full py-4 p-2 border border-gray-300 rounded mt-2"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4 w-[19.5%]">
              <label className="block text-gray-700">Phone</label>
              <input
                type="tel"
                {...register('Phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10,14}$/,
                    message: 'Phone number must be between 10 and 14 digits'
                  }
                })}
                className="w-full py-4 p-2 border border-gray-300 rounded mt-2"
                placeholder="Phone"
              />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
          </div>

          <div className="mb-4 relative w-[40%] m-auto">
            <label className="block text-gray-700">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              {...register('Password', { required: 'Password is required' })}
              className="w-full py-4 p-2 border border-gray-300 rounded mt-1"
              placeholder="Password"
            />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-12 cursor-pointer"
            >
              {showPassword ? <FaEye /> : <GoEyeClosed />}
            </span>
          </div>

          <div className="mb-10 w-[40%] m-auto mt-8">
            <input type="checkbox" id="terms" required />
            <label className="text-gray-700 ml-2 text-xl">
              By clicking "Sign Up", you agree to our{" "}
              <span
                className="text-green-500 cursor-pointer"
                onClick={() => setShowTerms(true)}
              >
                Terms and Conditions
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-[40%] m-auto flex justify-center p-2 py-4 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          Already have an account?{" "}
          <span
            className="text-blue-500 cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Sign In
          </span>
        </div>

        {/* Terms and Conditions Modal */}
        {showTerms && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
              <h3 className="text-xl font-bold mb-4">Terms and Conditions</h3>
              <p className="text-gray-700">
                Here are the terms and conditions... (Insert content here)
              </p>
              <button
                className="mt-4 w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => setShowTerms(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
