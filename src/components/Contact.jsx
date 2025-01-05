import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2"; // Sweet Alert2 ইমপোর্ট

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hsrcgso", 
        "template_n0n58dl", 
        form.current, 
        { publicKey: "pxFOaBY6Pgr2ylVs1" }
      )
      .then(
        () => {
          // সফল সাবমিশন হলে Sweet Alert দেখাও
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been successfully sent.",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          // ব্যর্থ হলে Sweet Alert দেখাও
          Swal.fire({
            icon: "error",
            title: "Failed to Send",
            text: `Something went wrong: ${error.text}`,
            confirmButtonText: "Try Again",
          });
        }
      );
  };

  return (
    <div className="p-5">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label
            htmlFor="from_name"
            className="text-sm md:text-lg text-gray-700 font-medium pb-1.5 block"
          >
            Name:
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            className="w-full bg-[#E7F5FF] rounded-lg placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Name"
          />
        </div>

        <div>
          <label
            htmlFor="from_email"
            className="text-sm md:text-lg text-gray-700 font-medium pb-1.5 block"
          >
            Email:
          </label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            className="w-full bg-[#E7F5FF] rounded-lg placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Email"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-sm md:text-lg text-gray-700 font-medium pb-1.5 block"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full h-[110px] bg-[#E7F5FF] rounded-lg placeholder:text-gray-400 placeholder:text-sm py-2 px-4 border focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Your Message"
          />
        </div>

        <div className="flex justify-center">
          <input
            type="submit"
            value="Send Message"
            className="py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
