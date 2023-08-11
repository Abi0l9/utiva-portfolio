import { Dialog, DialogContent } from "@mui/material";
import React, { useState } from "react";

const MessageSentPopUp = ({ state, email, close }) => {
  return (
    <Dialog open={state} onClose={close}>
      <DialogContent>
        <div className="text-gray-900 text-3xl">Message sent successfully</div>
        <div className="">
          <p className="text-gray-500">
            You'll receive feedback through your email address
          </p>
          <p className="text-green-800 text-center">{email}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Contact = () => {
  const [initialData, setInitialData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    purpose: "",
    message: "",
  });
  const [openPopUp, setOpenPopUp] = useState(false);
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInitialData({ ...initialData, [name]: value });
  };

  const toggler = () => setOpenPopUp(!openPopUp);

  const handleSubmission = (e) => {
    e.preventDefault();
    setEmail(initialData.email);
    const data = Object.keys(initialData);
    data.forEach((k) => {
      initialData[k] = "";
    });

    toggler();
  };
  return (
    <div
      className="flex flex-col mt-[100px] px-3 lg:mt-0 min-h-screen  items-center"
      id="contact"
    >
      <MessageSentPopUp state={openPopUp} email={email} close={toggler} />
      <div className="text-4xl mb-5">Let's Work For You!</div>
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
  );
};

export default Contact;
