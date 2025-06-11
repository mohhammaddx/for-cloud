import React, { useState, useEffect } from "react";
import axios from "axios";
import RecomendJob from "./recomendjob";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState([]);
  const [string , setString] = useState("");
  const [about, setabout] = useState([]);
  const [cv, setcv] = useState("");
  const navigate = useNavigate();
  var skill;
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("http://localhost:6050/jobseeker/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("Profile data:", response.data.jobseeker_profile);
        const skill = response.data.jobseeker_profile.skills;
         console.log("Skills String:", skill);
        setString(skill);
        const jsonObject = JSON.parse(skill);
        // console.log("Parsed skills:", jsonObject);
        setSkills(jsonObject);
        setUser(response.data);
        setabout(response.data.jobseeker_profile.preferences);
        setcv(response.data.jobseeker_profile.resume);
        // console.log("CV:", response.data.jobseeker_profile.resume);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching profile:", error);
        setLoading(false);
      });
  }, [token, navigate]);

  return (
    <>
      {/* <div className="profile-header">
        <p>back</p>
      </div> */}
      <div className="container bg-light border p-5 mt-2">
        <div className="row justify-content-between ">
          <div className="col-12">
            <h1>PROFILE</h1>
            <hr></hr>
          </div>
          <div className="col-md-4 border rounded p-1 text-center m-2">
            <h5 className="cv">Download My CV</h5>
            <a
              href={`http://localhost:6050/${cv.replace(/\\/g, "/")}`}
              download
              className="btn btn-dark mt-3"
            >
              Download
            </a>
            <p className="text-start m-2">{about}</p>
          </div>
          <div className="col-md-7 m-2  border rounded p-1">
            <h5 className="cv text-center">SKILLS</h5>
            <hr></hr>
            {skills.map((skill, index) => (
              <div key={index} className="col-md-4 myskills">
                <span className="text-muted myskills-span">
                  <b>{skill}</b>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      { skills ? ( <RecomendJob skills={string} user={user} />) : (<></>)}
    
    </>
  );
}
