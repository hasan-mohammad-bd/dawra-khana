import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

export const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tplt7f8",
        "template_jw3nb1e",
        form.current,
        "9aj4JxAaxRYtRCJ9D"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(" successfully sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      toast.success("Mail Sent!");

  };
  return (
    <div>
      <form
        className="flex flex-col rounded-xl p-8 m-5 shadow-2xl lg:w-[600px]"
        ref={form}
        onSubmit={sendEmail}
      >
        <h2 className="text-3xl font-semibold text-center py-5">Contact Us</h2>
        <label className="">Name</label>
        <input 
        required
          className="p-2 mb-3 rounded-lg"
          type="text"
          name="user_name"
        />
        <label>Email</label>
        <input
        required
          defaultValue={formValues.email}
          className="p-2 mb-3 rounded-lg"
          type="email"
          name="user_email"
        />
        <label>Message</label>
        <textarea
        required
          defaultValue={formValues.message}
          className="p-2 mb-3 rounded-lg"
          name="message"
        />
        <input className="btn btn-success" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
