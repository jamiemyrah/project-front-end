import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Cat() {
  const navigate = useNavigate();

  async function submit(event) {
    try {
      event.preventDefault();
      console.log("Submit called");
      console.log(event);
      let name = event.target[0].value;
      let Email = event.target[0].value;
      let password = event.target[0].value;
      let company = event.target[1].value;
      const response = axios.post("http://localhost:5001/", {
        name,
        company,
        Email,
        password,
      });
      if (response) {
        navigate("/");
      }
    } catch (error) {}
  }
  return (
    <div className="cat" id="Cat">
      <div className="container mt-5">
        <form onSubmit={(e) => submit(e)} action="">
          <div className="container mt-5 row d-flex justify-content-center">
            <div className="row col-md-6 col-xs-12">
              <div className="col-12 m-2">
                <label>
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  required
                />
              </div>
              <div className="col-12 m-2">
                <label>Company</label>
                <input className="form-control" type="text" name="imagePath" />
              </div>
              <div className="col-12 m-2">
                <label>Email</label>
                <input className="form-control" type="text" name="imagePath" />
              </div>
              <div className="col-12 m-2">
                <label>Password</label>
                <input className="form-control" type="text" name="imagePath" />
              </div>
              <div className="col-12 m-2">
                <label>user type</label>
                <input className="form-control" type="text" name="imagePath" />
              </div>
              <div className="col-12 m-2">
                <label>Date of joining</label>
                <input className="form-control" type="text" name="imagePath" />
              </div>
              <div className="col-12 d-flex">
                <div className="d-flex flex-row m-2  w-100 justify-content-between">
                  <Link to="/Home">
                    <button className="btn btn-secondary">Cancel</button>
                  </Link>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
