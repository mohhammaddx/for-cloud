import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function RecomendJob({ user, skills }) {
  const [jobs, setJobs] = useState([]);
  function getrec() {
    console.log("Skills:", skills);
    console.log("User:", user);
    if (!skills || skills.length === 0) {
      console.log("No skills yet, waiting...");
      return; // 🛑 don't fetch if skills are empty
    }

    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login"; // Redirect to login if no token is found
    }

    console.log("Fetching recommendations with skills:", skills);
    axios
      .get(`http://localhost:6050/recommendation`, {
        params: {
          skills: skills, // Pass skills as an array
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
  }

  useEffect(() => {
    getrec(); // Call getrec on component mount
  }, [skills]);

  const handleApp = async (id) => {

    const token = localStorage.getItem("token");

    try {
      const response = await axios.post(
        "http://localhost:6050/apply",
        { id: id }, // Make sure this is a JSON object with job_id
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // include token if required
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-start">Recomended Job For You</h2>

      <div className="row mt-4">
        {user &&
          jobs.map((job, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card p-3">
                <h5>{job.title}</h5>
                <p>{job.discription}</p>
                {/* <p>{job.company}</p> */}
                <p>{job.location}</p>
                <p>{job.salary}</p>
                {/* <p>{job.status}</p> */}
                <hr />
                <button
                  className="btn btn-dark"
                  onClick={(e) => handleApp(job.id)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
