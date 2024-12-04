import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";
const Login = () => {
  const navigate = useNavigate()
  const { signInUser, googleSignIn,setUser ,user , loading} = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const email = e.target.email.value;
    console.log(email, password);

    signInUser(email, password).then((result) => {
      console.log(result.user);
      Swal.fire('successfully logged in')
      navigate('/')
    }).catch(error=>{
        if(error){
            Swal.fire('invalid credential')
        }
    })
  };
  const handleGoogle = () => {
    googleSignIn().then((result) => {
      console.log(result.user);
      navigate('/')
      Swal.fire('successfully logged in as' , result?.user?.displayName)
    });
  };
  if(loading){
    return <Loading></Loading>
}
  return (
    <div>
      <div className="hero bg-slate-200 dark:bg-slate-900  h-[1000px] ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-slate-500">Login now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body text-black">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 space-y-3">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="border-t-4 p-3 text-center">
              <button
                onClick={handleGoogle}
                className="btn mx-8 bg-transparent text-slate-600 btn-primary"
              >
                Login with Google
              </button>
              <p>New user? <Link className="text-blue-500" to="/register">register</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
