import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ categoryCard }) => {

    const { id, category, title, image, button_color, background_color, text_color } = categoryCard;

    return (
        <Link to={`/donationDetails/${id}`}>
            <div className="card card-compact w-80 h-70 bg-base-100 shadow-xl hover:shadow-2xl" style={{ background: background_color }}>
                <figure><img src={image} className='w-full h-48' alt="Shoes" /></figure>
                <div className="card-body">
                    <div className="card-actions">
                        <button className='btn-sm rounded-lg font-bold' style={{ background: button_color, color: text_color }} >{category}</button>
                    </div>
                    <h2 className="card-title font-bold text-lg" style={{ color: text_color }}>{title}</h2>
                </div>
            </div>
        </Link>

    );
};

export default Category;