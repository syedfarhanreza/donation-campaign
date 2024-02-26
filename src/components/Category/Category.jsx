import React from 'react';

const Category = ({ categoryCard }) => {

    const { category, title, image, color,background_color } = categoryCard;

    return (
        <div className="card card-compact w-80 bg-base-100 shadow-xl" style={{background:background_color}}>
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <button className='btn-sm text-white rounded-lg font-bold' style={{background:color}} >{category}</button>
                </div>
                <h2 className="card-title">{title}</h2>
            </div>
        </div> 
    );
};

export default Category;