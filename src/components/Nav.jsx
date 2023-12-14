import React from "react";
import { links } from "./data";
import { Link } from "react-router-dom";
// import Admin from "./pages/Admin";
import { FaTimes } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Nav = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header className="relative  z-[999] hover:shadow-xl">
      <div className="vite  bg-blue-100/80 shadow-xl p-4 ">
        <nav className="flex justify-between items-center w-[95%] md:w-[90%]  mx-auto p-1 my-auto  ">
          <div className=" font-bold text-2xl text-teal-950 ">
            GIGM.<span className="text-purple-800 ">COM</span>
          </div>

          <div className="text-teal-950 tracking-wider">
            <ul className="hidden  md:flex space-x-6 ">
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <motion.li
                    className="hover:text-teal-600 "
                    whileHover={{ scale: 1.1, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    key={id}
                  >
                    <Link to={url}>{text}</Link>
                  </motion.li>
                );
              })}
              <Link to="/login">
                <motion.button
                  className="logo bg-teal-900 px-3 py-1 rounded-lg text-white mr-6 hover:bg-teal-600 tracking-wider "
                  whileHover={{ scale: 1.1, originX: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  Login
                </motion.button>
              </Link>
            </ul>
            <div className="flex justify-center align-middle">
              <div>
                <Link to="/login">
                  <motion.button
                    className="bg-teal-900 px-3 py-1 rounded-lg text-white mr-2  hover:bg-teal-600  md:hidden tracking-wider logo active:outline-none active:bg-green-950"
                    whileHover={{ scale: 1.05, originX: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    Login
                  </motion.button>
                </Link>
              </div>
              <motion.button
                className="border-none"
                type=""
                onClick={() => setOpen(!open)}
                whileHover={{ scale: 1.1, originX: 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {open === true ? (
                  <FaTimes className=" text-2xl cursor-pointer text-teal-900 transition-all duration-500 ease-in-out border-none md:hidden hover:shadow-teal-400 active:text-green-950" />
                ) : (
                  <TiThMenu className=" text-2xl text-teal-900 border-none cursor-pointer md:hidden hover:shadow-teal-200 hover:shadow-2xl active:text-green-950" />
                )}
              </motion.button>
            </div>
          </div>
          {/* mobile menu */}
        </nav>
        <AnimatePresence>
          {open ? (
            <motion.div
              ref={menuRef}
              className="navbar 
           md:hidden absolute left-0 right-0 mt-3 bg-cyan-950 text-center rounded-b-2xl p-6 z-[999]  text-white/80"
              initial={{ opacity: 0, y: "-100%", zIndex: "-1" }}
              animate={{
                opacity: 1,
                y: "0",
              }}
              exit={{
                opacity: 0,
                y: "-100%",
                zIndex: "-1",
                transition: { duration: "0.25" },
              }}
              transition={{
                type: "string",
                stiffness: "300",
                duration: "0.55",
              }}
            >
              <ul className="text-center md:hidden space-y-6  font-semibold ">
                {links.map((link) => {
                  const { id, url, text } = link;
                  return (
                    <motion.li
                      onClick={() => setOpen(false)}
                      className=" hover:text-teal-600 hover:rounded-lg p-1 ease-in-out "
                      whileHover={{ scale: 1.03, originX: 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      key={id}
                    >
                      <Link to={url}>{text}</Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ) : null}{" "}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Nav;
