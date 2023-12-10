import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

const Login = () => {
  return (
    <>
      <div className="min-h-[100dvh] mt-12 w-[90%] md:w-[40%] mx-auto ">
        <h1
          className="text-center uppercase text-red-300 mt-12 text-sm font-bold scroll-smooth tracking-wider"
          id="pricing"
        >
          Login
        </h1>

        <div className="border-2 rounded-2xl border-red-300  w-[7%] md:w-[4%] mx-auto mt-2"></div>
        <div className="card bg-gray-200/10 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
          <div>
            <h1 className="font-semibold capitalize text-2xl mb-16 mt-8">
              Login
            </h1>
          </div>
          <div>
            <label htmlFor="">
              {" "}
              <input
                type="text"
                required
                placeholder="E-mail"
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
            </label>
            <label htmlFor="">
              {" "}
              <input
                type="text"
                placeholder="Blockchain Wallet"
                required
                className="w-[80%] bg-transparent border-b-2 mb-16 outline-none"
              />
            </label>
            <label htmlFor="">
              <input
                type="Password"
                placeholder="Password"
                required
                className="w-[80%] bg-transparent border-b-2 mb-6 outline-none"
              />
            </label>{" "}
          </div>
          <div className="flex justify-between mx-auto w-[80%]">
            {/* <div>
              <label>
                <input type="checkbox" className="mr-1 mb-6 capitalize" />I
                agree to the terms & conditions
              </label>
            </div> */}
          </div>
          <button className="btn bg-blue-800 w-[80%] p-2  rounded-xl" href="#">
            Login
          </button>
          <div>
            <p className=" mt-6 mb-8">
              Already have an account ?
              <Link href="" to="/admin" className="hover:text-blue-400 ml-1">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
