import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate()

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const [errorMsg,setErrorMsg] = useState("")

  const handleEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const handlePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      email : email,
      password : password
    }
    const api = await axios.post('/checklogin',data)
    console.log(api)
    if(api?.data?.status === "success"){
      navigate('/main/'+api?.data?.userId)
    }
    setErrorMsg(api?.data?.status)
    

  }
  return (
    <div className="flex flex-col h-screen bg-slate-200 font-poppins">
      <div className="flex flex-grow"></div>
      <div className="flex justify-center">
        <div className="md:h-[40rem] h-screen md:w-3/5 w-screen border-2 rounded-xl flex shadow-lg">
          <div className="w-1/2 bg-[url('coverphoto1.webp')] rounded-l-lg bg-cover hidden md:flex flex-col items-center text-center h-full">
            <p className="font-semibold text-2xl mt-14 px-8 text-black">Turn your to-dos into ta-das! <br /> <span className="text-sm font-normal">Manage work with us</span></p>
          </div>
          {/* right box */}
          <div className="py-10 px-[2rem] md:w-1/2 w-full bg-white rounded-r-lg">
            <form action="" id="login-form" method="post" className="flex flex-col h-full">
              <div>
                <p className="my-1 font-semibold text-xl">Login to proceed</p>
                <p className="text-gray-500 text-base">Enter your details to continue,</p>
                <div className="my-4">
                  <input onChange={handleEmail} type="email" name="email" className="py-2 px-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Email" id="userEmail" ></input>

                  <input onChange={handlePassword} type="password" name="password" className="py-2 mt-4 px-4 outline-none border-2 rounded-lg w-full text-sm" placeholder="Password" id="userPassword" ></input>
                  <span id="phone-error" className="text-xs my-3 text-red-500 flex justify-center">{errorMsg}</span>
                </div>
                <p className="text-xs text-gray-500">By continuing, you agree to website's <a className="text-blue-600" href="">terms and conditions</a></p>
              </div>
              <div id="recaptcha-container"></div>
              <div className="flex flex-grow"></div>
              <div>
              <Link to={'/'} className="flex justify-center mb-2 border-2 border-blue-500 rounded-full text-blue-500 text-sm py-2 font-medium">Back to Home</Link>
                <button onClick={handleSubmit} id="sign-in-button" className="w-full bg-blue-500 rounded-full text-white text-sm py-2 font-medium">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

export default LoginPage;
