import axios from "axios";
import React, { useEffect,useState } from "react";

export default function Ejob() {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login"; // Redirect to login if no token is found
      }
      axios
        .get("http://localhost:6050/employer/job", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setJobs(res.data);
         
        })
        .catch((err) => {
          console.error(err.response.data.detail);
          
        });
    }, []);
  

    const getapp = async (id) => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`http://localhost:6050/jobApplyers`, {
          params: {
            job_id: id,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        alert("applicants data fetched successfully!");
      } catch (error) {
        console.error(error.response.data.detail);
      }
    }

    function deleteJob  (id)  {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login"; // Redirect to login if no token is found
      }
      axios
        .delete(`http://localhost:6050/jobdelete/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data);
          setJobs(jobs.filter((job) => job.id !== id));
          alert("Job deleted successfully!");
        })
        .catch((err) => {
          console.error(err.response.data.detail);
        });
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Description</th>
            <th>salary</th>

            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((jobs) => (
            <tr key={jobs.id}>
              <td>{jobs.title}</td>
              <td>{jobs.discription}</td>
              <td>{jobs.salary}</td>
              <td>
                <span className="badge bg-success">
                  <button onClick={(e)=>getapp(jobs.id)} > detail</button>
                </span>
              </td>
              <td>
                <button
                  onClick={() => deleteJob(jobs.id)}
                  className="badge bg-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* Example static rows */}
        </tbody>
      </table>
    );
}