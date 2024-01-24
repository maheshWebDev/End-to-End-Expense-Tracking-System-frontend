// Login.js
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  // State variables to manage form input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  // Handle form submission
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    // Gather login data from state
    const loginData = {
      email,
      password,
    };
    console.log("Login Data:", loginData);

    try {
      const response = await axios.post(
        "https://e2eexpensetracking.onrender.com/login",
        loginData
      );

      console.log(response);
      if (response.status === 200) {
        toast.success("Login successful");
        console.log("login", response);

        // Store user information in local storage
        login(response.data.token);

        // Redirect to another page
        navigate("/dashboard");
      } else {
        toast.error(response.data?.error || "Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);

      if (error.response) {
        toast.error(error.response.data.error || "Login failed");
      } else if (error.request) {
        toast.error("Network error. Please try again.");
      } else {
        toast.error("Error during login. Please try again.");
      }
    }
    // Clear form inputs after submission
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-xl-10">
          <div className="card border-0">
            <div className="card-body p-0">
              <div className="row no-gutters">
                {/* Left column with login form */}
                <div className="col-lg-6">
                  <div className="p-5">
                    <h6 className="h5 mb-5">Welcome back!</h6>

                    <form onSubmit={handleLoginSubmit}>
                      {/* Input for user's email */}
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      {/* Input for user's password */}
                      <div className="form-group mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input
                          type="password"
                          className="form-control"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      {/* Login submit button */}
                      <button type="submit" className="continue m-2">
                        Log In
                      </button>
                      {/* Forgot password link */}
                      <a
                        href="#l"
                        className="forgot-link float-right text-primary"
                      >
                        Forgot password?
                      </a>
                    </form>

                    {/* Link to registration page */}
                    <p className="text-muted text-center mt-3 mb-0">
                      Don't have an account?
                      <Link to="/Sign-up" className="text-primary ml-1">
                        Register
                      </Link>
                    </p>
                  </div>
                </div>

                {/* Right column with login welcome message */}
                <div className="col-lg-6 d-none d-lg-inline-block">
                  <div className="account-block rounded-right">
                    <div className="overlay rounded-right"></div>
                    <div className="account-testimonial">
                      {/* Welcome message */}
                      <h4 className="text-white m-2">Empower Your Finances</h4>
                      <p className="lead text-white">
                        "Log in to spendWise and start managing your expenses
                        effortlessly."
                      </p>
                      <p>- spendWise Team</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
