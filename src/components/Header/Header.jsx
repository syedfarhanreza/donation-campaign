import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Header = () => {

    const activeLink = "text-[#FF444A] font-bold link";

    const navLinks = <>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to='/'>Home</NavLink></li>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to= '/donations' >Donation</NavLink></li>
      <li><NavLink className={({isActive}) => (isActive ? activeLink : "") } to= '/statistics'>Statistics</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 w-4/5 mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">
                    <img className='w-64 h-16' src= {logo} alt="" />
                </a>
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