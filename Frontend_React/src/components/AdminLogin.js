import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminBoard } from "./AdminBoard";
import { Card } from "react-bootstrap";
import { CardBody, CardHeader, CardTitle } from "reactstrap";

export const AdminLogin = () => {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    { username: "ujwal@gmail.com", password: "ujwal" },
    { username: "tejas@gmail.com", password: "tejas" },
    { username: "gaurav@gmail.com", password: "gaurav" },
    { username: "aniket@gmail.com", password: "aniket" },
    { username: "dipak@gmail.com", password: "dipak" },
  ];

  const errors = {
    //uname: "invalid username",
    //pass: "invalid password"
    Invalid: "Invalid Username and Password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        //setErrorMessages({ name: "pass", message: errors.pass });
        setErrorMessages({ name: "invalid", message: errors.Invalid });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      //setErrorMessages({ name: "uname", message: errors.uname });
      setErrorMessages({ name: "invalid", message: errors.Invalid });
    }
  };

  // Generate  error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );
  //renderErrorMessage("uname")}
  // code for login form
  const renderForm = (
    <div className="pt-5" align="center">
      <div>
        <Card className="m-5" style={{ width: "30rem" }}>
          <CardBody className="m-4">
            <form onSubmit={handleSubmit}>
              <legend className="display-4 pt-5">SignIn</legend>
              <div className="row py-2">
                <label className="row form-label">Username </label>
                <input
                  className="row  form-control"
                  type="text"
                  name="uname"
                  required
                />
              </div>
              <div className="row py-2">
                <label className="row form-label">Password </label>
                <input
                  className="row form-control"
                  type="password"
                  name="pass"
                  required
                />
              </div>
              <div className="row py-3">
                <input className="row btn btn-secondary" type="Submit" />
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  );

  return (
    <div>
      <div>
        {renderErrorMessage("invalid")}
        {isSubmitted ? <AdminBoard /> : renderForm}
      </div>
    </div>
  );
};
