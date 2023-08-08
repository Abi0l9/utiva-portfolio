import React, { useState } from "react";
import SectionWrapper from "../../SectionWrapper";

const Contact = () => {
  const [initialData, setInitialData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInitialData({ ...initialData, [name]: value });
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(initialData);
    const data = Object.keys(initialData);
    data.forEach((k) => {
      initialData[k] = "";
    });
  };
  return (
    <div>
      <SectionWrapper>
        {/* <div className="text-2xl text-center">Contact me here</div> */}
        <div className="flex flex-col items-center">
          <form
            onSubmit={handleSubmission}
            action=""
            className="flex flex-col items-center md:text-center w-full"
          >
            <div className="flex flex-row items-center my-3 gap-x-2 w-full md:w-3/4">
              <div className="flex flex-col w-1/2">
                <label htmlFor="firstName" className="text-gray-300 text-base">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={initialData.firstName}
                  placeholder="Joe"
                  onChange={handleChange}
                  className="bg-gray-700 rounded-md py-2 px-1 text-gray-300 "
                />
              </div>
              <div className="flex flex-col w-1/2">
                <label htmlFor="lastName" className="text-gray-300 text-base">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={initialData.lastName}
                  onChange={handleChange}
                  placeholder="Abdul"
                  className="bg-gray-700 rounded-md py-2 px-1 text-gray-300 "
                />
              </div>
            </div>
            <div className="flex flex-row items-center w-full my-3 md:w-3/4">
              <div className="flex flex-col w-full">
                <label htmlFor="email" className="text-gray-300 text-base">
                  Email Address
                </label>
                <input
                  placeholder="JoeAbdul@email.com"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={initialData.email}
                  id="email"
                  className="bg-gray-700 rounded-md py-2 px-1 text-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-row items-center w-full my-3 md:w-3/4">
              <div className="flex flex-col w-full">
                <label htmlFor="purpose" className="text-gray-300 text-base">
                  Purpose
                </label>
                <input
                  placeholder="e.g Gig, Backend Job"
                  type="purpose"
                  name="purpose"
                  id="purpose"
                  onChange={handleChange}
                  value={initialData.purpose}
                  className="bg-gray-700 rounded-md py-2 px-1 text-gray-300"
                />
              </div>
            </div>
            <div className="flex flex-row items-center w-full my-3 md:w-3/4">
              <div className="flex flex-col w-full">
                <label htmlFor="message" className="text-gray-300 text-base">
                  Message
                </label>
                <textarea
                  placeholder="type your message here..."
                  type="message"
                  name="message"
                  rows={10}
                  id="message"
                  onChange={handleChange}
                  value={initialData.message}
                  className="bg-gray-700 rounded-md py-2 px-1 text-gray-300 resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col rounded-md w-3/4 text-center">
              <button className="py-2 bg-gray-900 rounded-md md:w-3/4 mx-auto w-full active:bg-gray-800 hover:bg-gray-900">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default Contact;
