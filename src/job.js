import { useState } from "react";
import axios from "axios";

export default function Job() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");

  const token = localStorage.getItem("token");
  const handelSubmit = (e) => {
    const formData = new FormData();
    console.log("Sending:", {
      title,
      description,
      location,
      salary,
    });
    e.preventDefault();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("location", location);
    formData.append("salary", salary);
    console.log(formData);
    axios
      .post("http://localhost:6050/jobcreate", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        alert("Job added successfully");
        window.location.reload();
      })
      .catch((err) => {
        console.error(err.response.data.detail);
        alert(err.response.data.detail);
      });
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever=""
      >
        Add Job
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New Job
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handelSubmit}>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Description:
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="loc" className="col-form-label">
                    location:
                  </label>
                  <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    className="form-control"
                    id="loc"
                  />
                </div>
                <div className="mb-3">
                  <label for="salary" className="col-form-label">
                    Salary:
                  </label>
                  <input
                    type="text"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    className="form-control"
                    id="salary"
                  />
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-dark">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
