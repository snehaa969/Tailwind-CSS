import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Flag from '../assets/flag.jpg'

export const Header = () => {
  return (
    <header className='bg-deepBlue'>
        <div className='relative w-[1080px] mx-auto flex items-center justify-between'>
            {/* Logo */}
            <Link to ="/" className="text-white font-bold cursor-pointer py-7 pr-7">
            <span>RozarPay</span>
            </Link>

            <ul className='flex space-x-6'>
                <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer hidden lg:block transition-all duration-200 relative group'>
                    <NavLink to="/">Home</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue cursor-pointer hidden lg:block transition-all duration-200 relative group'>
                    <NavLink to="/payment">Payments</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/banking">Banking</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/corporate">Corporate </NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/payrol">Payrol</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/resources">Resources</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/support">Support</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
                <li className='text-white font-mullish py-7 hover:text-lightBlue hidden lg:block cursor-pointer transition-all duration-200 relative group'>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <div className='absolute w-full h-1 bg-lightBlue bottom-0 hidden group-hover:block transition-all duration-200'></div>
                </li>
            </ul>

            <div className='flex space-x-6'>
                <img src={Flag} alt='Flag' className='w-[30px] h-[28px] hidden lg:block'/>
                <button className='py-2 px-5 font-mullish text-white border-lightBlue border rounded-sm text-sm font-bold'>Log in</button>
                <button className='py-2 px-4 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200
                hover:text-lightBlue500 hidden lg:flex'>Sign Up</button>
            </div>
        </div>
    </header>
  )
}
