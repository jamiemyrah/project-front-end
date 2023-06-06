import React, { useState } from "react";
import axios from "axios";

export default function Start() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("normal");
  const [loginStatus, setLoginStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    let errorMessage = "";
    if (!email) {
      errorMessage = (
        <span className="text-danger border_R">
          "Email address must be given."
        </span>
      );
    } else if (!password) {
      errorMessage = (
        <span className="text-danger border_R">"Password must be given."</span>
      );
    } else if (password.length < 6) {
      errorMessage = (
        <span className="text-danger">
          "Password must be at least 6 characters long."
        </span>
      );
    }
    if (errorMessage) {
      setLoginStatus(errorMessage);
    } else {
      setIsSubmitting(true);
      setLoginStatus("");
      try {
        const response = await axios.post(`http://localhost:5001`, {
          email: email,
          password: password,
          userType: userType,
        });

        if (response.data.message === "User does not exist") {
          // User doesn't exist, show a message with an option to register
          setLoginStatus("User does not exist. Would you like to register?");
        } else if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus(response.data.user.email);
        }
      } catch (error) {
        console.error(error);
        setLoginStatus("Wrong password/username or user does not exist.");
      }
    }
  };

  const handleUserRegistration = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5001`, {
        email: email,
        password: password,
        userType: userType,
      });

      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus("Account created successfully");
      }
    } catch (error) {
      console.error(error);
      setLoginStatus("Failed to create user account.");
    }
  };

  return (
    <div className="d-flex ">
      <div className="  start d-lg-flex d-md-block d-sm-block">
        <form method="POST" action="/users/login" className="form_container ">
          <div>
            <h1 className="text-white text-center">Sign in</h1>
            <label className="lab" htmlFor="email">
              Email
              <span style={{ fontSize: "20px" }} className="text-danger mx-1">
                *
              </span>
            </label>
            <input
              required
              placeholder="Email"
              className="form-control w-100"
              type="text"
              name={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="my-3">
            <label className="lab" htmlFor="userType">
              User Type:
            </label>
            <select
              className="form-control w-100"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option>Select user type</option>
              <option value="normal">Normal User</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>
          <div>
            <label className="lab" htmlFor="password">
              Password
              <span style={{ fontSize: "20px" }} className="text-danger mx-1">
                *
              </span>
            </label>
            <input
              required
              placeholder="Password"
              className="form-control w-100"
              type="password"
              name={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            required
            onClick={login}
            type="submit"
            value="SignIn"
            className="submit btn w-100 btn-success mt-3 text-center"
            disabled={isSubmitting}
          />
          <h1
            style={{
              fontSize: "15px",
              marginTop: "20px",
              border: "red",
            }}
          >
            {loginStatus}
          </h1>
        </form>
        {/* User registration form */}
        {loginStatus === "User does not exist. Would you like to register?" && (
          <form
            onSubmit={handleUserRegistration}
            className="form_container"
            style={{ marginTop: "10px" }}
          >
            <h2>Create Account</h2>
            <div>
              <label htmlFor="email">Email</label>
              <input
                required
                placeholder="Email"
                className="form-control w-100"
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="my-3">
              <label htmlFor="userType">User Type:</label>
              <select
                className="form-control w-100"
                name="userType"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="normal">Normal User</option>
                <option value="admin">Admin</option>
                <option value="superadmin">Super Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                required
                placeholder="Password"
                className="form-control w-100"
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <input
              required
              type="submit"
              value="Create Account"
              className="submit btn w-100 btn-danger mt-3 text-center"
            />
          </form>
        )}
      </div>
    </div>
  );
}
