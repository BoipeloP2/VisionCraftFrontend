import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
  return (
    <>
      <BreadCrumb title="Sign Up" />
      <Container class1="login-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className="text-center">Sign Up</h3>
              <form action="" className="d-flex flex-column gap-30">
                <CustomInput
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                />

                  <CustomInput
                    type="text"
                    name="lastname"
                    placeholder="Last Number"
                  />
                  <CustomInput
                    type="tel"
                    name="mobileno"
                    placeholder="Phone Number"
                  />
                  <CustomInput
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                  <CustomInput
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                <div className="mt-2">
                  <div className="d-flex justify-content-center gap-15 mt-2 align-items-center">
                    {/* <button type="submit"  className='button border-0'>Login</button> */}
                    <Link to="/signup" className="button signup">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUp;
