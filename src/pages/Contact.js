import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiPhoneCall, BiInfoCircle} from "react-icons/bi";
import Container from '../components/Container';
import CustomInput from '../components/CustomInput'


const Contact = () => {
  return (
    <>  
      <BreadCrumb title="Contact us"/>

      <Container class1="contact-wrapper home-wrapper py-5">
          <div className="row">
            <div className="col-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14372.552244133247!2d28.23201175227478!3d-25.766002987583644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9561a8172dda0f%3A0x476361a522de0976!2sBrooklyn%2C%20Pretoria%2C%200181!5e0!3m2!1sen!2sza!4v1687726614459!5m2!1sen!2sza"
            width="600" 
            height="450" 
            className="border-0 w-100"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className='d-flex flex-column gap-15'>
                    <CustomInput type="text"  placeholder="Name" />
                    <CustomInput type="email"  placeholder="Email" />
                    <CustomInput type="tel"  placeholder="Mobile Number" />
                    <div><textarea className="w-100 form-control" cols="30" rows="5" placeholder="Comment" ></textarea></div>
                    <div>
                  <button className='button border-0'> Send</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get In Touch With Us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                      <AiOutlineHome className='fs-5'/>
                      <address className='mb-0'>Hno: 358 Gerrit Maritz, 0412</address>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                      <BiPhoneCall className='fs-5'/>
                      <a href="tel:+012 012 012">Call Us : 012 012 0121</a>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                      <AiOutlineMail className='fs-5'/>
                      <a href="mailto:visioncraft@gmail.com">visioncraft@gmail.com</a>
                      </li>
                      <li className='mb-4 d-flex gap-15 align-items-center'>
                      <BiInfoCircle className='fs-5'/>
                      <p className='mb-0'>Monday - Friday 9AM - 16:30PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default Contact