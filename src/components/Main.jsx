// import React, { lazy } from "react";
import image from "../assets/img/Services 1.jpg";
import imagez from "../assets/img/Services 1.jpg";
import imag from "../assets/img/Services 2.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: "10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      // delay: 0.5,
    },
  },
};
const containerVaris = {
  hidden: {
    opacity: 0,
    x: "-10vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,

    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const Main = () => {
  return (
    <AnimatePresence>
      <>
        <section className="">
          <div className=" mx-auto w-[80%] md:w-[75%]  text-white  md:items-center md:justify-center   md:flex md:flex-row-reverse mt-12">
            <motion.div
              className="md:w-1/2 md:ml-4 "
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <img
                className="image-area shadow-md hover:scale-105 ease-in-out rounded-xl transition mx-auto duration-300  md:min-w-auto"
                src={image}
                alt={image}
              />
            </motion.div>
            <motion.div
              className="md:w-1/2 "
              variants={containerVaris}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-center font-bold pt-6 text-4xl text-area">
                Travelling Made Easy
                <div className=" border-2 rounded-full w-[20%]  mx-auto my-2 "></div>
              </h1>
              <p className="tracking-wider text-area ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                quo tenetur iste? Assumenda eveniet nisi quae nam doloribus
                quisquam explicabo eos ratione dolore ab animi molestias
                suscipit, natus optio sequi id? Id, modi dolorem. Ratione veniam
                laboriosam blanditiis maiores. Repellat amet eius itaque
                corrupti at excepturi facilis deleniti delectus quia!
              </p>
              <div className="text-center mt-4 font-semibold sm:mb-4">
                <Link to="/admin">
                  <motion.button
                    variants={buttonVariants}
                    whileHover="hover"
                    className="brand border-2 border-white/50 px-4 py-2 rounded-full hover:bg-teal-800"
                  >
                    Become an Admin
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* pricing */}
        <section className="">
          <h1 className="text-center uppercase text-red-300 mt-12 text-sm font-bold scroll-smooth tracking-wider">
            Our Services
          </h1>
          <div className="border-2 rounded-2xl border-red-300  w-[7%] md:w-[4%] mx-auto mt-2"></div>
          <p className="text-center capitalize text-2xl text-white font-semibold mt-8 mb-12 w-[80%] mx-auto">
            Reserve your seats with ease
          </p>

          <div className="md:grid grid-cols-2  w-[80%] md:w-[75%] mx-auto md:space-x-4">
            <div className="bg-gray-200/10 flex-grow-0 text-center p-6 m-4  mx-auto rounded-3xl text-white/80">
              <img
                className="w-[50%] h-auto mx-auto rounded-xl shadow-2xl mb-8 hover:scale-110 ease-in-out transition duration-300 cursor-pointer"
                src={imagez}
                alt=""
              />{" "}
              <div>
                <h1 className="font-semibold mb-4">
                  Road transport Reservations
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit exercitationem nesciunt error alias ducimus aperiam
                  rerum ab facere facilis ipsam?
                </p>
                <Link to="/bus">
                  <button className="general bg-teal-950 p-2 rounded-md mt-4 hover:bg-teal-600">
                    Reserve a seat
                  </button>
                </Link>
              </div>
            </div>
            <div className=" bg-gray-200/10 flex-grow-0 text-center p-6 m-4  mx-auto rounded-3xl text-white/80 ">
              <img
                className="w-[50%] h-auto mx-auto mb-8 rounded-xl shadow-2xl hover:scale-110 ease-in-out transition duration-300 cursor-pointer"
                src={imag}
                alt=""
              />
              <div>
                <h1 className="font-semibold mb-4">Flight Reservations</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Velit exercitationem nesciunt error alias ducimus aperiam
                  rerum ab facere facilis ipsam?
                </p>
              </div>
              <Link to="/plane">
                <button className="general bg-teal-950 p-2 rounded-md mt-4 hover:bg-teal-600">
                  Reserve a seat
                </button>
              </Link>
            </div>
          </div>
        </section>
      </>
    </AnimatePresence>
  );
};

export default Main;
