import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import {Link} from "react-router-dom"
import Container from '../components/Container'
import CustomInput from '../components/CustomInput'

const ResetPassword = () => {
  return (
    <>
    <BreadCrumb title="Reset Password"/>

<Container   class1="login-wrapper home-wrapper-2 py-5 ">
    <div className="row">
        <div className="col-12">
            <div className="auth-card ">
                <h3 className='text-center mb-3'>Reset Password</h3>
                <form action="" className='d-flex flex-column gap-30'>
                        <CustomInput type="password" name="password" placeholder='Password' />
                        <CustomInput type="password" name="confirmpassword" placeholder='Confirm Password'/>
                    <div className='mt-2'>
                        <div className="d-flex justify-content-center gap-15 mt-2 align-items-center">
                            <button type="submit" className='button border-0'>Reset</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</Container>
    
    </>
  )
}

export default ResetPassword