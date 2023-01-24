import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.email.value;
    const email = form.password.value;
    console.log(name, email);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold pb-3">Wellcome back</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form action="" onSubmit={handleSubmitLogin}>
              <div className="card-body px-5">
                <div className="form-control">
                  <h2 className="text-3xl mb-4">Login here</h2>
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
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt">
                      Forgot password?{" "}
                      <Link className=" link link-hover"> reset here</Link>
                    </span>
                  </label>

                  <label className="label">
                    <span className="label-text-alt">
                      Don't have an account?
                      <Link to="/register" className=" link link-hover">
                        {" "}
                        Register
                      </Link>
                    </span>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary"> Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
