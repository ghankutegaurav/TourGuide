import Button from "react-bootstrap/Button";
import 'react-phone-number-input/style.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*Added*/
const Signup = () => {
  
  const signUpSchema = yup.object().shape({
    firstName: yup.string().required("required"),
    lastName: yup.string().required("required"),
    dateOfBirth: yup.date().required("required"),
    phoneNo: yup.string().matches("[7-9][0-9]{9}", "phone number is invalid").required(),
    email: yup.string().email().required("Invalid"),
    password: yup.string().min(3).max(10).required("Enter above 3 characters"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
    uid: yup.string().matches().required(),
  });
  

  const { register, handleSubmit, formState:{errors}} = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const submitForm =(data)=>{
    axios.post("http://localhost:9192/customers",data).then((response)=>response.data);
    console.log("posted");
    toast.success("Successfully Registered 👌",{

    })
    
  }


  return (
    <div className="sigup">
      <form className="row g-4 box" onSubmit={handleSubmit(submitForm)}>
        <div className="row g-3 box">
          <legend className="display-1">
            SignUp
          </legend>
          <div className="col-md-2 box">
            <label className="form-label">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="First name"
              {...register("firstName")}
            />
            <p id="err">{errors.firstName?.message}</p>
          </div>
          <div className="col-md-2 box">
            <label className="form-label">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Last name"
              {...register("lastName")}
            />
            <p id="err">{errors.lastName?.message}</p>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-2 box">
            <label className="form-label">
              Date Of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              className="form-control"
              {...register("dateOfBirth")}
            />
            <p id="err">{errors.dateOfBirth?.message}</p>
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="col-md-2 box">
            <label className="form-label">
              Contact
            </label>
            <input
              type="text"
              name="phoneNo"
              className="form-control"
              placeholder="+91-"
              {...register("phoneNo")}
            />
            <p id="err">{errors.phoneNo?.message}</p>
            <div className="valid-feedback">Looks good!</div>
          </div>
        </div>
        <div className="row g-3 box">
          <div className="col-md-2">
            <label className="form-label">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="example@email.com"
              {...register("email")}
            />
            <p id="err">{errors.email?.message}</p>
            <div className="invalid-feedback">Please provide a valid city.</div>
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              {...register("password")}
            />
            <p id="err">{errors.password?.message}</p>
            <div className="invalid-feedback">password does not match</div>
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="Confirm Password"
              {...register("confirmPassword")}
            />
            <p id="err">{errors.confirmPassword?.message}</p>
            <div className="invalid-feedback">password does not match</div>
          </div>
          <div className="col-md-2">
            <label className="form-label">
              Aadhar no.
            </label>
            <input type="text" name="uid" className="form-control" {...register("uid")}>
            </input>
            <div className="invalid-feedback">password does not match</div>
          </div>
        </div>
        <div className="row g-3 box">
          <div className="col-6 col-lg-2">
            <Button
              type="submit"
              className="col-12 col-lg-10"
              variant="dark"
            >
              SignUp
            </Button>
              <ToastContainer/>
          </div>
          <div className="col-6 col-lg-2">
            <Button className="col-12 col-lg-10 btn btn-danger">Reset</Button>
          </div>
          <div className="col-lg-5">
            <div className="row">
              <div className="col">
                <label className="form-label">
                  Already have account ?
                </label>
              </div>
              <div className="col">
                <Button
                  className="col-12 col-lg-6"
                  as={Link}
                  to={"/signin"}
                  variant="dark"
                >
                  SignIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
