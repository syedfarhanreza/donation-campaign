import React from 'react';

const Banner = () => {
    return (
        <div className='w-4/5 mx-auto my-20'>
            <h1 className="text-5xl font-bold text-center mb-5"> I Grow By Helping People In Need</h1>
            <div className='flex justify-center'>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button className='btn bg-[#FF444A] text-white'>Search</button>
            </div>
        </div>
    );
};

export default Banner;