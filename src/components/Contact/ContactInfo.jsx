import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaDownload } from "react-icons/fa";
import {
  faInstagram,
  faGithub,
  faLinkedinIn, 
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const ContactInfo = () => {
  return (
    <div className='flex justify-center items-center '>
      <div className="w-full max-w-md mx-auto p-6">
        <div className="text-white space-y-10 flex w-70 flex-col items-center">
          {/* Contact Info */}
          <div className="w-full space-y-10 flex flex-col items-center">
            <p className="w-full text-center text-white border-0 rounded-md p-2 focus:ring-0 focus:outline-none font-[estile9] border-x-2">
              +91 9812445606
            </p>
            
            <p className="w-full text-center text-white border-0 rounded-md p-2 focus:ring-0 focus:outline-none font-[estile9] border-x-2">
              imlakshaykhanna@gmail.com
            </p>

            <a 
              href="/Lakshay_khanna_CV.pdf"  
              download="Lakshy_Khanna_CV.pdf"
              className="w-full text-center bg-white px-6 py-3 flex justify-center items-center gap-2 hover:bg-gray-400 transition-all duration-300 text-black border-0 rounded-md focus:ring-0 focus:outline-none font-[estile9] border-x-2"
            >
              <FaDownload />
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="w-full">
            <section className="flex justify-center items-center gap-4 w-full">
              {/* Instagram Link */}
              <a
                href="https://www.instagram.com/imlakshaykhanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center p-3 rounded-md drop-shadow-xl bg-[#E1306C] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#331029]"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Instagram
                </span>
              </a>

              {/* GitHub Link */}
              <a
                href="https://github.com/stark-4-11"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center p-3 rounded-md drop-shadow-xl bg-[#333] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#331029]"
              >
                <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  GitHub
                </span>
              </a>

              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/in/imlakshaykhanna/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center p-3 rounded-md drop-shadow-xl bg-[#0077b5] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#331029]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="w-5 h-5" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  LinkedIn
                </span>
              </a>

              {/* X/Twitter Link */}
              <a
                href="https://x.com/stark_4_11"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex justify-center p-3 rounded-md drop-shadow-xl bg-[#000] text-white font-semibold hover:translate-y-3 hover:rounded-[50%] transition-all duration-500 hover:bg-[#331029]"
              >
                <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 border-[1px] p-3 rounded-md" />
                <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  X/Twitter
                </span>
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
