import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:5050/jobseeker/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Profile data:", response.data.jobseeker_profile.skills);
        const skills = response.data.jobseeker_profile.skills;
        const jsonObject = JSON.parse(skills);
        console.log("Parsed skills:", jsonObject);
        setSkills(jsonObject);
        setUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, [token, navigate]);

  return (
    <>
      {/* <div className="profile-header">
        <p>back</p>
      </div> */}
      <div className="container  h-40 mt-5">
        <div className="row">
          <div className="col-6 p-5">
            <h1 className="">Abed Alrahman</h1>

            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatibus . Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quisquam, voluptatibus Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quisquam, voluptatibus
            </p>
          </div>
          <div className="col-6 p-5">
            <p className="text-muted">
              <b>Address</b> <br></br>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            </p>
            <div className="social-icons mt-2">
              <a href="#!" className="me-3">
                <i className="fab fa-facebook-f">
                  <img width={24} src="./facebook.png" alt="face" />
                </i>
              </a>
              <a href="#!" className="me-3">
                <i className="fab fa-twitter">
                  <img width={24} src="./linkedin (1).png" alt="face" />
                </i>
              </a>
              <a href="#!" className="me-3">
                <i className="fab fa-linkedin-in">
                  <img width={24} src="./github.png" alt="face" />
                </i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="myskills">
        <div className="container">
          <div className="row mt-5">
            <h2>skills</h2>
            <p className="mt-3 text-muted skills">
              {skills.map((skill, index) => (
                <span key={index} className="badge bg-light text-dark">
                  {skill}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <h2 className="mb-5">JOB For You</h2>
        <div className="row justify-content-center">
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="card shadow-sm p-3 mb-5 bg-body rounded">
              <div className="card-body">
                <h5 className="card-title">ITG</h5>
                <p className="card-text">
                  Backend project for ITG company. Lorem ipsum dolor sit amet,
                </p>
                <a href="#" className="btn btn-primary">
                  apply now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
