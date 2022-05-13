import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Lottie from 'react-lottie'
import AnimationLoding from '../../components/fragment/loadingAnimation/loadingAnimation.json'
import image from '../../assets/image-login.png'
import iconEye from '../../assets/icon-eye.svg'

function LoginPetugas() {
    const [nama, setNama] = useState('')
    const [password, setPassword] = useState('')
    const [passwordShown, setPasswordShown] = useState(false);
    const [Loading, setLoading] = useState(false);

    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const OptionLottie = {
      loop: true,
      autoplay: true,
      animationData: AnimationLoding,
    }

    const Login = async (e) => {
      e.preventDefault();
      let sendData = {
        nama: nama,
        password: password
      }
      await axios
      .post("http://localhost:8080/petugas/api/v1/login", sendData)
      .then(res => {
        if(res.data.status === "success"){
          setLoading(true);
          localStorage.setItem('nama', nama);

          setTimeout(() => {
            window.location.href = '/dashboard';
            setPassword("");
            setNama("");
            setLoading(false);
          }, 1000);
        }else {
            setPassword("");
            setNama("");
            alert(res.data.message);
        }
    })
    };

  return (
    <>
      <div className='grid grid-cols-2'>
        <div>
          <img src={image} alt="background image" className='w-full max-h-screen'></img>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='text-primary-purple text-6xl font-bold mb-14'>Login Admin</h1>
          <form method='POST' onSubmit={Login}>
            <label className='text-2xl'>Nama</label>
            <input
              type="nama"
              name="nama"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
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
            <div className='mt-12 text-center'>
                <button type='submit' className='bg-primary-purple text-white font-medium text-3xl py-2 w-96 rounded-lg'>Login</button>
            </div>
          </form>
        </div>
        {Loading ? (
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

export default LoginPetugas