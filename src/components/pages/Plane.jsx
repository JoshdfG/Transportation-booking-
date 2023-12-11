import React, { useState } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Plane = () => {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const handleCheckboxChange1 = () => {
    setIsChecked1((prevChecked) => !prevChecked);
    setIsLoading1(true);

    if (!isChecked1) {
      setTimeout(() => {
        setIsLoading1(false);
      }, 200);
    }
  };
  const handleCheckboxChange2 = () => {
    setIsChecked2((prevChecked) => !prevChecked);
    setIsLoading2(true);

    if (!isChecked2) {
      setTimeout(() => {
        setIsLoading2(false);
      }, 200);
    }
  };
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const [selectedDate1, setSelectedDate1] = useState(null);

  const handleDateChange1 = (date) => {
    setSelectedDate1(date);
  };
  return (
    <section className="min-h-[100dvh] cn-element w-[80%] md:w[50%] lg:w-[40%] mx-auto md:h-fit text-white">
      <div>
        <h1>Book flights</h1>
        <article>
          <div className="card  bg-gray-200/10 text-center p-6 m-4  mx-auto rounded-2xl text-white/80 ">
            <div>
              <h1 className="font-semibold capitalize text-2xl mb-16 mt-8">
                Reserve your flights & Boarding Today
              </h1>
            </div>
            <form>
              <div className="my-8 space-x-6 ">
                <div className="links-container flex align-middle justify-center">
                  <label htmlFor="check1" className="check-box">
                    <input
                      id="check1"
                      type="checkbox"
                      className="checkbox hidden"
                      checked={isChecked1}
                      onChange={handleCheckboxChange1}
                    />
                    {!isChecked1 ? (
                      <svg
                        className=""
                        id="not-completed-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="12"
                          stroke="#8A8A8A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 6"
                        />
                      </svg>
                    ) : isLoading1 ? (
                      <svg
                        class="loading "
                        id="loading"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                          stroke="#e3e3e3"
                          stroke-width="2.08333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="completed"
                        id="completed"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" fill="#00703c"></circle>
                        <path
                          d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    )}
                  </label>
                  <span className="mr-2">Round Trip</span>

                  <label htmlFor="check2" className="check-box">
                    <input
                      id="check2"
                      className="checkbox hidden"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      type="checkbox"
                    />
                    {!isChecked2 ? (
                      <svg
                        className=""
                        id="not-completed-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 32 32"
                        fill="none"
                      >
                        <circle
                          cx="16"
                          cy="16"
                          r="12"
                          stroke="#8A8A8A"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeDasharray="4 6"
                        />
                      </svg>
                    ) : isLoading2 ? (
                      <svg
                        class="loading "
                        id="loading"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M22.0004 12C22.0004 13.9778 21.4139 15.9112 20.3151 17.5557C19.2162 19.2002 17.6545 20.4819 15.8272 21.2388C13.9999 21.9957 11.9893 22.1937 10.0495 21.8079C8.10965 21.422 6.32782 20.4696 4.9293 19.0711C3.53077 17.6725 2.57837 15.8907 2.19251 13.9509C1.80666 12.0111 2.00469 10.0004 2.76157 8.17317C3.51845 6.3459 4.80017 4.78412 6.44466 3.6853C8.08916 2.58649 10.0226 2 12.0004 2"
                          stroke="#e3e3e3"
                          stroke-width="2.08333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="completed"
                        id="completed"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="12" cy="12" r="10" fill="	#00703c"></circle>
                        <path
                          d="M17.2738 8.52629C17.6643 8.91682 17.6643 9.54998 17.2738 9.94051L11.4405 15.7738C11.05 16.1644 10.4168 16.1644 10.0263 15.7738L7.3596 13.1072C6.96908 12.7166 6.96908 12.0835 7.3596 11.693C7.75013 11.3024 8.38329 11.3024 8.77382 11.693L10.7334 13.6525L15.8596 8.52629C16.2501 8.13577 16.8833 8.13577 17.2738 8.52629Z"
                          fill="#fff"
                        ></path>
                      </svg>
                    )}
                  </label>
                  <span className="mr-2">One Way</span>
                </div>
              </div>

              <label htmlFor="" className="">
                <input
                  type="text"
                  required
                  placeholder="Take off location"
                  className="textarea w-[40%] p-2 mr-2 rounded-lg bg-slate-500 mb-10 outline-none text-white"
                />
              </label>
              <label htmlFor="">
                <input
                  type="text"
                  placeholder="Destination"
                  required
                  className="textarea w-[40%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                />
              </label>
              <div>
                <div className="flex w-[100%] justify-center align-middle">
                  <label htmlFor="" className="">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      className="textarea w-[80%] p-2  rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>

                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="textarea w-[80%] p-2 rounded-lg bg-slate-500 mb-8 outline-none text-white"
                    />
                  </label>
                </div>
                <div className="flex w-[100%] justify-center align-middle">
                  <label htmlFor="">
                    {" "}
                    <div className="mb-3">
                      <p>Pick up date</p>
                    </div>
                    <DatePicker
                      selected={selectedDate}
                      onChange={handleDateChange}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea  p-2 rounded-lg bg-slate-500 mb-8 outline-none w-[80%] text-white"
                    />
                  </label>
                  <label htmlFor="">
                    <div className="mb-3">
                      <p>Return date</p>
                    </div>
                    <DatePicker
                      selected={selectedDate1}
                      onChange={handleDateChange1}
                      placeholderText="Select a date"
                      className=".react-datepicker__month-container textarea  p-2 rounded-lg bg-slate-500 mb-8 outline-none w-[80%] text-white"
                    />
                  </label>
                </div>
              </div>
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
