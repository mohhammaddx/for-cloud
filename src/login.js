import React from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState } from "react";




  
function Login() {



const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [role, setrole] = useState("");



function handleLogin(event) {
  event.preventDefault();
  console.log("Sending:", { email, password });
  axios
    .post("http://localhost:6050/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      console.log(res.data);
      if (res.data.status === "success") {
        alert("Login successful!");
        setrole(res.data.role);
        localStorage.setItem("token", res.data.access_token);

        
        console.log(role);
        if (res.data.role === "job_seeker") {
          window.location.href = "/job_seeker";
        } else if (res.data.role === "employer") {
          window.location.href = "/employer";
        }
        
      } else {
        alert("Login failed. Please try again.");
      }
    })
    .catch((err) => {
        console.error(err.response.data.detail)
        alert(err.response.data.detail);
    });
}




  return (
    <div>
      <div className="container  d-flex justify-content-center align-items-center vh-100">
        <div
          className="card login login p-4"
          style={{ width: "100%", maxWidth: "300px",height: "300px", boxShadow:' 0 14px 10px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="text-center mb-4">Login</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                id="email"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark w-60">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
