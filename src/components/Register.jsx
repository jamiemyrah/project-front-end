import React, { useState } from "react";
import Reg from "./Reg";

const Register = () => {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    comfimPassword: "",
  });
  const inputs = [
    {
      id: 1,
      name: "first name",
      type: "text",
      placeholder: "first name",
      errorMessage:
        " first name should be 3-16 characters and shoud not include any special character",
      label: "first name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "last name",
      type: "text",
      placeholder: "last name",
      errorMessage:
        "last name should be 3-16 characters and shoud not include any special character",
      label: "last name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 3,
      name: "Email",
      type: "email",
      placeholder: "email",
      errorMessage: "It should be a valid email address!",
      label: "email",
      pattern: "^(.+)@(.+)$",
      required: true,
    },

    {
      id: 4,
      name: "Password",
      type: "text",
      placeholder: "password",
      errorMessage:
        "Password should be 8-10 characters and should include atleast 1 letter,1 number and one special character",
      label: "password",
      pattern: `^(?=.*[A-Za-z0-9])(?=.*)(?=.*[@$!%*#?&])[A-Za-z0-9@$!%*#?&]{8,10}$`,
    },
    {
      id: 5,
      name: " Confrim password",
      type: "password",
      placeholder: "confrim password",
      errorMessage: "password don't match",
      label: "confirm password",
      pattern: values.password,
    },
  ];
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);

  const handleSubmit = (event) => {
    setValues(event.target.value);
  };

  return (
    <div className="full">
      <div className="container">
        <div className=" fil py-4 mx-3 ">
          <h1 className="si text-center text-white">Register</h1>
          <form className="mat py-3 bg-white w-50" onSubmit={handleSubmit}>
            {inputs.map((input) => (
              <Reg
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <div className="mas">
              <button className="btn btn-success my-3 py-2">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
