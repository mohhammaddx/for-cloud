import axios from "axios";
import { useEffect, useState } from "react";

export default function JobSeeker() {
  const [Search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
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
        if (res.data.role !== "job_seeker") {
          alert("Access denied. Please log in again.");
          window.location.href = "/login"; // Redirect to login if access is denied
        }
      })
      .catch((err) => {
        console.error(err.response.data.detail);
        alert(err.response.data.detail);
      });
  }, []);





  const handleSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (Search.trim() === "") {
      alert("Please enter a job title or category to search.");
      return;
    }
    // Perform the search logic here, e.g., redirect to a search results page
    console.log("Searching for:", Search);
    // You can also use a state variable to store the search results and display them on the page.
    axios
      .get(`http://localhost:6050/recommendation`, {
        params: {
          skills: Search, // Pass skills as an array
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data.recommendations);
        // setArray(res.data.recommendations);
        setJobs(res.data.recommendations);
      })
      .catch((err) => {
        console.error(err.response.data.detail);
      });
  };
  return (
    <div dir="ltr" className="bg-light min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            JOB MATCHER
          </a>
          <div>
            <a href="/profile" className="btn btn-outline-dark me-2">
              Profile
            </a>
            <button className="btn btn-dark">Logout</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container text-center my-5">
        <h2 className="fw-bold">Available Jobs</h2>
        <p>All available jobs in one place</p>

        <div className="d-flex justify-content-center mb-4">
          <p className="disapled p-2 rounded text-light bg-dark mx-2">
            Search for Jobs
          </p>
        </div>

        <div className="input-group w-50 mx-auto">
          <form onSubmit={handleSearch} className="form-control">
            <input
              type="text"
              value={Search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
              placeholder="Job title or category"
            />
            <button type="submit" className="btn btn-dark">
              Search
            </button>
          </form>
        </div>
      </div>

      {/* Popular Categories */}
      <div className="container my-5">
        <h3 className="fw-bold text-center mb-4">Most In-Demand Fields</h3>
        <div className="row text-center">
          <div className="col-md-3 mb-3">
            <div className="card p-4">
              <div className="mb-2">👨‍💻</div>
              <h5>Software Development</h5>
              <small>+1250 available jobs</small>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-4">
              <div className="mb-2">📈</div>
              <h5>Digital Marketing</h5>
              <small>+850 available jobs</small>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-4">
              <div className="mb-2">💵</div>
              <h5>Finance & Accounting</h5>
              <small>+750 available jobs</small>
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <div className="card p-4">
              <div className="mb-2">👥</div>
              <h5>Human Resources</h5>
              <small>+600 available jobs</small>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="container my-5">
        <h3 className="fw-bold text-center mb-4">Latest Jobs</h3>
        <div className="card p-3 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Digital Marketing Manager</h5>
              <p className="mb-1">
                <small>New Startup Company</small>
              </p>
              <small>Experience required: 3-5 years</small>
            </div>
            <button className="btn btn-dark">Apply Now</button>
          </div>
        </div>
        <div className="card p-3">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h5>Frontend Developer</h5>
              <p className="mb-1">
                <small>Tech Solutions Company</small>
              </p>
              <small>Experience in React.js is preferred</small>
            </div>
            <button className="btn btn-dark">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
