import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUpPage = () => {

  const [fullName,setFullname] = useState()
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [confirmPassword,setConfirmPassword] = useState()
  const [errormsg,setErrormsg] = useState('')

  const navigate = useNavigate()

  const handleFullName = (e) => {
    const name = e.target.value
    setFullname(name)
  }
  const handleEmail = (e) => {
    const email=e.target.value
    setEmail(email)
  }
  const handlePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleConfirmPassword = (e) => {
    const confirmPassword = e.target.value
    setConfirmPassword(confirmPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setErrormsg('Invalid email address');
      return;
    }
  
    // Basic password validation
    if (password.length < 8) {
      setErrormsg('Password must be at least 8 characters long');
      return;
    }
  
    if (password !== confirmPassword) {
      setErrormsg('Passwords do not match');
      return;
    }
  
    // If all validations pass, clear error message
    setErrormsg('');
  
    const data = {
      "name" : fullName,
      "email" : email,
      "password" : password
    }
    const sendData = await axios.post('/userSignup',data)
    navigate('/login')

  };
  
  
  

  return (
    <div className="flex flex-col h-screen bg-slate-200 font-poppins">
      <div className="flex flex-grow"></div>
      <div className="flex justify-center">
        <div className="md:h-[40rem] h-screen md:w-3/5 w-screen border-2 rounded-xl flex shadow-lg">
        <div className="w-1/2 bg-[url('coverphot21.webp')] rounded-l-lg bg-cover hidden md:flex flex-col items-center text-center h-full">
            <p className="font-semibold text-2xl mt-14 px-8 text-black">Turn your to-dos into ta-das! <br /> <span className="text-sm font-normal">Manage work with us</span></p>
          </div>
          {/* right box */}
          <div className="py-10 px-[2rem] md:w-1/2 w-full bg-white rounded-r-lg">
            <form action="" id="login-form" method="post" className="flex flex-col h-full">
              <div>
                <p className="my-1 font-semibold text-xl">New User? Sign Up</p>
                <p className="text-gray-500 text-base">Enter your details to continue,</p>
                <div className="my-4">

                  <input onChange={handleFullName} type="text" name="Full Name" className="py-2 px-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Full Name" id="fullName"></input>

                  <input onChange={handleEmail} type="email" name="email" className="py-2 px-4 mt-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Email" id="userEmail" ></input>

                  <input onChange={handlePassword} type="password" name="password" className="py-2 mt-4 px-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Password" id="userPassword" ></input>


                  <input onChange={handleConfirmPassword} type="password" name="confirmpassword" className="py-2 mt-4 px-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Re-Enter the Password" id="userPassword" ></input>

                  <span id="phone-error" className="text-xs my-3 text-red-500 flex justify-center">{errormsg}</span>
                </div>
                <p className="text-xs text-gray-500">By continuing, you agree to website's <a className="text-blue-600" href="">terms and conditions</a></p>
              </div>
              <div id="recaptcha-container"></div>
              <div className="flex flex-grow"></div>
              <div>
                <Link to={'/'} className="flex justify-center mb-2 border-2 border-blue-500 rounded-full text-blue-500 text-sm py-2 font-medium">Back to Home</Link>
                <button onClick={handleSubmit} id="sign-in-button" className="w-full bg-blue-500 rounded-full text-white text-sm py-2 font-medium">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

export default SignUpPage;
