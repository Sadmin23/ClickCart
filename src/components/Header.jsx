import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='text-xl lg:text-3xl font-bold text-blue-600'>App Name</h1>
            </Link>
            <ul className='flex gap-6 md:text-lg font-semibold'>
                <li className='text-slate-700 hover:underline'><a href="/">Home</a></li>
                <li className='text-slate-700 hover:underline'><a href="/sign-in">Sign In</a></li>
            </ul>
        </div>
    </header>
  )
}
