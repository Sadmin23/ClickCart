import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { login } from '../redux/user/userSlice'

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
        dispatch(login());
        navigate('/');
      })() : console.log("Login failed");
    })
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign In</h1>
      <div className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" placeholder="Enter your email" value={username} onChange={handleUsername}/>
        <input className='border p-3 rounded-lg' type="password" placeholder="Enter a Password" value={password} onChange={handlePassword}/>
        <button className='bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:opacity-100' onClick={handleLogin}>Sign In</button>
      </div>
      <div className='flex gap-1 mt-5 font-semibold'>
        <p>Don't have an account?</p>
        <Link to='/sign-in' className='text-blue-800 hover:underline'>Sign In</Link>
      </div>
    </div>
  )
}
