import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto my-20 p-20'>
            <h1 className="text-5xl font-bold text-center mb-10"> I Grow By Helping People In Need</h1>
            <div className='flex justify-center'>
                <input type="text" placeholder="Search here" className="input input-bordered w-full max-w-xs" />
                <button className='btn bg-[#FF444A] text-white'>Search</button>
            </div>
        </div>
    );
};

export default Banner;