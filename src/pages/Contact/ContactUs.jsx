import "./ContactUs.css"

import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2q9msjd', 'template_bydsl9m', form.current, '2y5pzCnisTfUVtXCb')
      .then((result) => {
        toast.success('Email has been sent successfully', {
          position: "top-right",
          theme: "dark",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
        e.target.reset();
      }, (error) => {
        toast.error("Dont sent your email", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      });
  };
  
  return (
    <>
    <ToastContainer />
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <textarea type="text" name="user_name" rows="1" placeholder="Type your Name here"/>
      <label>Email</label>
      <textarea type="email" name="user_email" rows="1" placeholder="Type your Email here"/>
      <label>Message</label>
      <textarea name="message" rows="6" placeholder="Type your Message here"/>
      <input className="btn" type="submit" value="Send" />
    </form>

    </>
  );
};

export default ContactUs;