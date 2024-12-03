import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Register = () => {
    const {signUpUser , manageProfile} = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
          toast.error("Password must contain at least 6 characters");
          return;
        }
        if (!/[a-z]/.test(password)) {
          toast.error("Password must contain at least one lowercase letter");
          return;
        }
        if (!/[A-Z]/.test(password)) {
          toast.error("Password must contain at least one uppercase letter");
          return;
        }
    
        signUpUser(email, password).then((res) => {
          Swal.fire('successful')
            navigate("/");

          return manageProfile(name, image);
        });
      };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Join Us Now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo url"
                  className="input input-bordered"
                  name="image"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
