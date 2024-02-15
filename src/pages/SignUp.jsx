import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    console.log(email, password);
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-bold my-7'>Sign Up</h1>
      <div className='flex flex-col gap-4'>
        <input className='border p-3 rounded-lg' type="text" placeholder="Username" id='username' />
        <input className='border p-3 rounded-lg' type="text" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <input className='border p-3 rounded-lg' type="password" placeholder="Enter a Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button className='bg-blue-600 text-white p-3 rounded-lg text-lg font-semibold hover:opacity-100' onClick={handleRegister}>Sign Up</button>
      </div>
      <div className='flex gap-1 mt-5 font-semibold'>
        <p>Have an account?</p>
        <Link to='/sign-in' className='text-blue-800 hover:underline'>Sign In</Link>
      </div>
    </div>
  )
}
