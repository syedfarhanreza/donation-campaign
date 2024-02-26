import React from 'react';

const Category = ({ categoryCard }) => {

    const { category, title, image, button_color,background_color,text_color } = categoryCard;

    return (
        <div className="card card-compact w-80 h-70 bg-base-100 shadow-xl hover:shadow-2xl" style={{background:background_color}}>
            <figure><img src={image} className='w-full h-48' alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <button className='btn-sm rounded-lg font-bold' style={{background:button_color, color:text_color}} >{category}</button>
                </div>
                <h2 className="card-title font-bold text-xl" style={{color:text_color}}>{title}</h2>
            </div>
        </div> 
    );
};

export default Category;