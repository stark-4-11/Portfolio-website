import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer style={{ textAlign: "center", padding: "10px" }}>
        <p className="text-white font-[estile9] w-full">
          © 2025 Lakshay. All rights reserved. |{" "}
          <a
            href="https://github.com/stark-4-11/Portfolio-Website.git"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "5px" }}
          >
            View on GitHub <FaGithub />
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
