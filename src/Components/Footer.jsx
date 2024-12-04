import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-200 dark:bg-slate-950 text-base-content dark:text-white rounded p-10 container mx-auto">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="md:join space-y-3 md:space-y-0">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn text-white bg-slate-600 border-slate-700 join-item">Join us now</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
// className="footer  bg-base-200 dark:bg-slate-600 text-base-content dark:text-white rounded p-10 flex flex-col justify-center items-center"
