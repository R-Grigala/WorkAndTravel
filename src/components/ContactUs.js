import "./ContactUs.css"

import React, { useRef } from 'react';

import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const ContactUs = () => {
  const form = useRef();

  const success = () => {
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
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0vn7ppa', 'template_sxkp2cn', form.current, 'rbK2QReL4stHDFvXV')
      .then((result) => {
        success();
        e.target.reset();
      }, (error) => {
          toast.error('Email dont send')
      });
  };

  return (
    <>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" rows="6" placeholder="Type your message here"/>
      <input className="btn" type="submit" value="Send" />
    </form>

    </>
  );
};

export default ContactUs;