import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../redux/user/userSlice'
import toast, { Toaster } from 'react-hot-toast';

export default function SignIn() {

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(res => res.json())
    .then(data => {
      // kminchelle  0lelplR
      (data && data.token) ? (() => {
        toast.success('Sign In Successful');
        dispatch(login());
        navigate('/');
      })() : toast.error('Sign In Failed');
    })
  };

  return (
    <div className='p-3 max-w-md mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
      <div className='flex flex-col gap-4'>
        <input className='border-2 p-3 rounded-lg' type="text" placeholder="Enter your email" value={username} onChange={handleUsername}/>
        <input className='border-2 p-3 rounded-lg' type="password" placeholder="Enter a Password" value={password} onChange={handlePassword}/>
        <button className='bg-blue-600 text-white my-2 p-3 rounded-lg text-lg font-semibold hover:opacity-100' onClick={handleLogin}>Sign In</button>
        <Toaster />
      </div>
    </div>
  )
}
