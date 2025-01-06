import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 dark:bg-slate-950 text-base-content dark:text-white rounded p-10 container mx-auto flex flex-col md:flex-row justify-between">
        <aside>
          <a className="text-2xl font-extrabold md:bg-gradient-to-l from-blue-700 to-transparent ">
            CHILL{" "}
            <span className="p-1 bg-gradient-to-l from-blue-500 to-transparent md:text-slate-200">
              GAMER
            </span>
          </a>
          <p>
            Chill Gamer private ltd.
            <br />
            Providing reliable game review since 2004
          </p>
        </aside>
        <nav className="">
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.facebook.com/originaljit"
              target="_blank"
              className="text-3xl hover:bg-blue-500 rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/ImArijitBasu"
              target="_blank"
              className="text-3xl hover:bg-blue-500 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-basu-606626310/"
              target="_blank"
              className="text-3xl hover:bg-blue-500 rounded-md"
            >
              <FaLinkedin />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center bg-blue-900 text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by CHILL GAMER PRIVATE Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
