import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import image from '../../assets/image-login.png'
import iconEye from '../../assets/icon-eye.svg'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const Login = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/penumpang/api/v1/login", {
        email: email,
        password: password,
      });

      setPassword("");
      setEmail("");
    };

  return (
    <>
      <div className='grid grid-cols-2'>
        <div>
          <img src={image} alt="background image" className='w-full max-h-screen'></img>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-primary-purple text-6xl font-bold mb-14'>Login</h1>
          <form method='POST'>
            <label className='text-2xl'>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:ring-primary-purple focus:border-primary-purple text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
            />
            <label className='text-2xl'>Password</label>
            <div className='flex flex-row '>
              <input
                type={passwordShown ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
              />
              <img onClick={togglePasswordVisiblity} src={iconEye} alt='icon-eye' className='cursor-pointer absolute w-7 ml-80 mt-4' />
            </div>
            <div className='text-primary-purple mt-8'>
              <p>Don’t Have Account? <Link to={"/register"}>Register</Link></p>
            </div>
            <div className='mt-12 text-center'>
                <button type='submit' className='bg-primary-purple text-white font-medium text-3xl py-2 w-96 rounded-lg'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login