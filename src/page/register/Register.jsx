import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Lottie from 'react-lottie'
import AnimationLoding from '../../components/fragment/loadingAnimation/loadingAnimation.json'
import imageBackground from '../../assets/image-register.png'
import iconEye from '../../assets/icon-eye.svg'

function Login() {
    const [username, setUsername] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [telp, setTelp] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [loading, setLoading] = useState(false);

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const OptionLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationLoding,
    }

    const Register = async (e) => {
      e.preventDefault();
      await axios.post("http://localhost:8080/penumpang/api/v1/register", {
          username: username,
          nama: name,
          email: email,
          password: password,
          telp: telp
      });
      
      setLoading(true);

      setTimeout(() => {
        window.location.href = '/login';
        setUsername("");
        setName("");
        setEmail("");
        setPassword("");
        setTelp("");
        setLoading(false);
      }, 1000);
    };

  return (
    <>
      <div className='grid grid-cols-2'>
        <div>
          <img src={imageBackground} alt="background image" className='w-full max-h-screen'></img>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-primary-purple text-6xl font-bold mb-14'>Register</h1>
          <form method='POST' onSubmit={Register}>
            <label className='text-2xl'>Username</label>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
            />
            <label className='text-2xl'>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
            />
            <label className='text-2xl'>Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4 mb-9"
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
            <label className='text-2xl'>Telephone</label>
            <input
              type="telp"
              name="telp"
              id="telp"
              value={telp}
              onChange={(e) => setTelp(e.target.value)}
              className="text-sm flex-1 block w-96 border-2 rounded-lg px-6 py-4"
            />
            <div className='text-primary-purple mt-8'>
                <p>Already Have an Account? <Link to={"/login"}>Login</Link></p>
            </div>
            <div className='mt-12 text-center'>
                <button type='submit' className='bg-primary-purple text-white font-medium text-3xl py-2 w-96 rounded-lg'>Register</button>
            </div>
          </form>
        </div>
          {loading ? (
            <div className='flex absolute col-span-2 bg-gray-100/75 h-full w-full'>
              <Lottie
              options={OptionLottie}
              height={400}
              width={400}
              />
            </div>
          ) : null}
      </div>
    </>
  )
}

export default Login