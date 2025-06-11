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
    const [cv, setcv] = useState();
    const [cname, setcname] = useState("");
    const [cinfo, setcinfo] = useState("");

  function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData();
    if (role === "job_seeker") {
      console.log("Sending:", { name, email, password, role, cv });
      
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("cv", cv); 
      axios
        .post("http://localhost:6050/jregister", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "success") {
            alert("job seeker Created successfuly!");
            localStorage.setItem("token", res.data.access_token);
            if (res.data.role === "job_seeker") {
              window.location.href = "/job_seeker";
            }
          } else {
            alert("Register failed. Please try again.");
          }
        })
        .catch((err) => {
          console.error(err.response.data.detail);
          alert(err.response.data.detail);
        });
    } else if (role === "employer") {
      console.log("Sending:", { name, email, password, role, cname, cinfo });
      formData.append("full_name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", role);
      formData.append("cname", cname);
      formData.append("cinfo", cinfo);
        axios
          .post("http://localhost:6050/eregister", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.status === "success") {
              alert("Employer Created successfuly!");
              localStorage.setItem("token", res.data.access_token);
              if (res.data.role === "employer") {
                window.location.href = "/employer";
              }
            } else {
              alert("Register failed. Please try again.");
            }
          })
          .catch((err) => {
            console.error(err.response.data.detail);
            alert(err.response.data.detail);
          });

    }
    
  }

  return (
    <div>
      <div className="container  d-flex justify-content-center align-items-center vh-100">
        <div
          className="card login p-4"
          style={{ width: "100%", maxWidth: "400px" }}
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
            {role === "job_seeker" ? (
              <>
                <div className="mb-3">
                  <label htmlFor="cv" className="form-label">
                    upload your CV
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="cv"
                    onChange={(e) => setcv(e.target.files[0])}
                    
                    placeholder="your CV"
                  />
                </div>
              </>
            ) : (
              <>
             
              </>
            )}
            {role === "employer" ? (
              <>
                {" "}
                <div className="mb-3">
                  <label htmlFor="cname" className="form-label">
                    company name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cname"
                    onChange={(e) => setcname(e.target.value)}
                    value={cname}
                    placeholder="company name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cinfo" className="form-label">
                    company info
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cinfo"
                    onChange={(e) => setcinfo(e.target.value)}
                    value={cinfo}
                    placeholder="company info"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
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
