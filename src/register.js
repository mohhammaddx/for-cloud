import React from "react";
import "./style.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useState } from "react";




  
function Register() {   

    const [name, setname] = useState("");
    const [role, setrole] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  function handleLogin(event) {
    event.preventDefault();

    console.log("Sending:", { name, email, password, role });

    axios
      .post("http://localhost:5050/register", {
        email: email,
        password: password,
        full_name: name,
        role: role,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          alert("user Created successfuly!");
          localStorage.setItem("token", res.data.access_token);
          window.location.href = "/home";
        } else {
          alert("Register failed. Please try again.");
        }
      })
      .catch((err) => {
        console.error(err.response.data.detail);
        alert(err.response.data.detail);
      });
  }

  return (
    <div>
      <div className="container  d-flex justify-content-center align-items-center vh-100">
        <div
          className="card login p-4"
          style={{ width: "100%", maxWidth: "300px" }}
        >
          <h3 className="text-center mb-4">Register</h3>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                FULL NAME
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setname(e.target.value)}
                value={name}
                id="name"
                placeholder="Enter Full Name"
              />
            </div>
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
            <div className="mb-3">
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setrole(e.target.value)}
                value={role}
              >
                <option>Select your ROLE</option>
                <option value="job_seeker">Job Seeker</option>
                <option value="employer">Employer</option>
              </select>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-dark w-60">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
