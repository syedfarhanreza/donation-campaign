import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';



const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])

    return (
        <div className='grid grid-cols-4 gap-10 w-11/12 mx-auto my-20'>
           {
             categories.map(categoryCard => <Category key={categoryCard.id} categoryCard={categoryCard}></Category>)
           }
        </div>
    );
};

export default Categories;