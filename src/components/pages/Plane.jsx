import React, { useState } from "react";
import { Link } from "react-router-dom";
const Plane = () => {
  return (
    <section className="min-h-[100dvh] w-[70%] md:w[50%] lg:w-[40%] mx-auto md:h-fit text-white">
      <div>
        <h1>Book flights</h1>
        <article>
          <div className="card bg-gray-200/20 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
            <div>
              <h1 className="font-semibold capitalize text-2xl mb-16 mt-8">
                Book your seats
              </h1>
            </div>
            <form>
              <label htmlFor="">
                {" "}
                <input
                  type="text"
                  required
                  placeholder="Take off location"
                  className="textarea w-[80%] bg-transparent border-b-2 mb-16 outline-none"
                />
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Destination"
                  required
                  className="w-[80%] bg-transparent border-b-2 mb-6 outline-none"
                />
              </label>{" "}
            </form>
            <div className="flex justify-between mx-auto w-[80%]"></div>
            <button
              className="btn bg-blue-800 w-[80%] p-2  rounded-xl"
              href="#"
            >
              Submit
            </button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Plane;
