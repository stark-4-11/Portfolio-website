import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
import ContactInfo from "./ContactInfo";

init(import.meta.env.VITE_EMAILJS_USER_ID);

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prevent multiple submissions
    if (isLoading || isSubmitted) return;
    
    setIsLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Updated for Vite
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Updated for Vite
        e.target,
        import.meta.env.VITE_EMAILJS_USER_ID // Updated for Vite
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setIsSubmitted(true);
          e.target.reset();
          setTimeout(() => setIsSubmitted(false), 5000); // Reset after 5 seconds
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="sm:flex lg:space-x-40 xl:space-x-90 space-y-30 grid justify-center items-center">
      <div className="w-full max-w-[90vw] p-6">
        <h2 className="text-2xl font-bold text-white mb-4">Get in touch</h2>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="from_name"
            className="text-white border-0 rounded-md p-2 mb-4 focus:ring-0 focus:outline-none font-[estile9] border-y-2"
            required
            placeholder="Full Name"
            disabled={isLoading || isSubmitted}
          />
          <input
            type="email"
            name="from_email"
            className="text-white border-0 rounded-md p-2 mb-4 focus:ring-0 focus:outline-none font-[estile9] border-y-2"
            required
            placeholder="Email"
            disabled={isLoading || isSubmitted}
          />
          <textarea
            name="message"
            className="text-white border-0 rounded-md p-2 mb-4 focus:ring-0 focus:outline-none font-[estile9] border-y-2 resize-none h-25"
            required
            placeholder="Message"
            defaultValue={""}
            disabled={isLoading || isSubmitted}
          />
          <button
            type="submit"
            className={`group relative inline-flex  items-center justify-center text-base rounded-xl px-8 py-3 font-semibold transition-all duration-200 ${
              isLoading || isSubmitted 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-white text-black hover:bg-gray-300'
            }`}
            disabled={isLoading || isSubmitted}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : isSubmitted ? (
              'Sent! ✓'
            ) : (
              <>
                Send
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  height="10"
                  width="10"
                  fill="none"
                  className="mt-0.5 ml-2 -mr-1 stroke-black stroke-2"
                >
                  <path
                    d="M0 5h7"
                    className="transition opacity-0 group-hover:opacity-100"
                  ></path>
                  <path
                    d="M1 1l4 4-4 4"
                    className="transition group-hover:translate-x-[3px]"
                  ></path>
                </svg>
              </>
            )}
          </button>
        </form>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Form;