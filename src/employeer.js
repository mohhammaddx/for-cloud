import React, { useEffect } from "react";
import axios from "axios";
import Job from "./job";
import Jobs from "./emplyeer/jops";

export default function Employer() {

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login"; // Redirect to login if no token is found
      }
      axios
        .get("http://localhost:6050/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.role !== "employer") {
            alert("Access denied. Please log in again.");
            window.location.href = "/login"; // Redirect to login if access is denied
          }
        })
        .catch((err) => {
          console.error(err.response.data.detail);
          alert(err.response.data.detail);
        });
    }, []);

  return (
    <div dir="ltr" className="bg-light min-vh-100 p-4">
      {/* Top Summary Boxes */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h6 className="text-muted">Active Jobs</h6>
            <h3>12</h3>
            <i className="bi bi-briefcase fs-3 text-dark"></i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h6 className="text-muted">New Applicants</h6>
            <h3>48</h3>
            <i className="bi bi-people fs-3 text-success"></i>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center p-3">
            <h6 className="text-muted">Scheduled Interviews</h6>
            <h3>8</h3>
            <i className="bi bi-calendar-event fs-3 text-purple"></i>
          </div>
        </div>
      </div>

      {/* Company Information */}
      <div className="card p-4 mb-4">
        <h5 className="fw-bold mb-3">Company Information</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label className="form-label">Company Name</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Advanced Technology Company"
            />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label">Industry</label>
            <input
              type="text"
              className="form-control"
              defaultValue="Information Technology"
            />
          </div>
        </div>
        <button className="btn btn-dark mt-2">Update Information</button>
      </div>

      {/* Active Jobs */}
      <div className="card p-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="fw-bold">Active Jobs</h5>
          <Job />
          {/*  */}
        </div>
    {/* table go here */}
    <Jobs />
      </div>

      {/* Recommended Candidates */}
      <div className="card p-4">
        <h5 className="fw-bold mb-4">Recommended Candidates</h5>
        <div className="row">
          {/* Candidate 1 */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <i className="bi bi-person-circle fs-1 mb-2"></i>
              <h6>Omar Fouad</h6>
              <p className="small">Frontend Developer</p>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-dark"
                  style={{ width: "75%" }}
                ></div>
              </div>
              <button className="btn btn-dark btn-sm">View CV</button>
            </div>
          </div>

          {/* Candidate 2 */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <i className="bi bi-person-circle fs-1 mb-2"></i>
              <h6>Mohammed Khaled</h6>
              <p className="small">Project Manager</p>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-dark"
                  style={{ width: "90%" }}
                ></div>
              </div>
              <button className="btn btn-dark btn-sm">View CV</button>
            </div>
          </div>

          {/* Candidate 3 */}
          <div className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <i className="bi bi-person-circle fs-1 mb-2"></i>
              <h6>Sara Ahmed</h6>
              <p className="small">Frontend Developer</p>
              <div className="progress mb-2" style={{ height: "5px" }}>
                <div
                  className="progress-bar bg-dark"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <button className="btn btn-dark btn-sm">View CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}