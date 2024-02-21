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
<section className="bg-white md:-mt-20">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" className="flex items-center mb-6 text-4xl font-bold gap-2 text-gray-900">
          <img className="w-16 h-16 mr-2" src="shopping-cart.png" alt="logo"/>
          ClickCart    
      </a>
      <div className="w-full bg-white rounded-xl shadow-sm dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6">
                  <div>
                      <label type="text" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                      <input type="email" value={username} onChange={handleUsername} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 " placeholder="kminchelle" required=""/>
                  </div>
                  <div>
                      <label type="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                      <input type="password" value={password} onChange={handlePassword} placeholder="0lelplR" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3" required=""/>
                  </div>
                  <button onClick={handleLogin} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center ">Sign in</button>
              </div>
          </div>
          <Toaster/>
      </div>
  </div>
</section>
  )
}
