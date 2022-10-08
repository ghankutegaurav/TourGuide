import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Packages } from "./Packages";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userDetails, setUserDetails] = useState([]);

  const [success, setSuccess] = useState(false);

  const customerId = 2;

  const submitForm=(e)=>{
    e.preventDefault();
    const newUser = { email:email, password: password };

    setUserDetails([ ...userDetails, newUser ]);

    var customer= axios.get('http://localhost:9192/customersExists'+'?customerId='+customerId+'&password='+password).then((repsonse)=>{
            console.log(repsonse.data);
        if(repsonse.data){
                document.getElementById("c1").innerHTML="Login Successfully";
                setSuccess(true);
            }else{
                document.getElementById("c1").innerHTML="Invalid Credentials";
            }
        })
  }


  return (<>

  {success ? (
    <Packages />
    ) : (
    <div className=" content-container">
    <div className="sigin">
      <form className="row g-3 box" onSubmit={submitForm}>
        <div className="row g-1 box">
          <legend className="display-1">
            SignIn
          </legend>
          <div className="col-md-4 box">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              className="form-control"
              placeholder="example@email.com"
              required
              onChange={(e)=> setEmail(e.target.value)}
            />
          </div>
          </div>
          <div className="row g-1 box">
          <div className="col-md-4 box">
            <label htmlFor="password" className="form-label">
              Passward
            </label>
            <input
              type="password"
              name="password"
              value={password}
              className="form-control"
              id="password"
              placeholder="password"
              required
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="row g-2 box">
          <div className="col-lg-1">
            <Button
              className="col-lg-12"
              as={Link}
              to={"/packages"}
              variant="dark"
            >
              SignIn
            </Button>
          </div>
          <div className="col-lg-1">
            <button className="col-lg-12 btn btn-danger" type="reset">
              Reset
            </button>
          </div>
          </div>
          <div className="row-lg-6">
          <div className="col">
            <div className="row">
              <div className="col-lg-4">
                <label className="form-label">
                  Don't have account ?{" "}
                </label>
              </div>
              <div className="col-lg-4">
                <Button
                  className="col-lg-6"
                  as={Link}
                  to={"/signup"}
                  variant="dark"
                >
                  SignUp
                </Button>
              </div>
            </div>
          </div>
          <div className="row-lg-6">
            <div className="row">
              <div className="col-lg-4">
                <label className="form-label">
                  Login as Administrator
                </label>
              </div>
              <div className="col-lg-4">
                <Button
                  className="col-lg-6"
                  as={Link}
                  to={"/adminlogin"}
                  variant="dark"
                >
                  Login
                </Button>
              </div>
            </div>
          </div>

          </div>
        </div>
      </form>
    </div>
    
    </div>
    )}
    </>
  );
}

export default Signin;
