import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Header = () => {

    const activeLink = "text-[#FF444A] font-bold link";

    const navLinks = <>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to='/' >Home</NavLink></li>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to= '/donation' >Donation</NavLink></li>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to= '/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-11/12 mx-auto">
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" to='/'>
                    <img className='w-64 h-16' src= {logo} alt="" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 ">
                    {navLinks}
                </ul>
            </div>
        </div>
    );
};

export default Header;