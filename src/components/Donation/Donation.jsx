import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationApplication } from '../../utility/localstorage';

const Donation = () => {

    const donationCategories = useLoaderData();
    const [donateItems, setDonateItems] = useState([]);
    
    useEffect(() => {
        const storedDonationIds = getStoredDonationApplication();
        if(donationCategories.length > 0){
            const donationItem = [];
            for(const id of storedDonationIds){
                const donatedItem = donationCategories.find(donatedCategory => donatedCategory.id === id);
                if(donatedItem){
                    donationItem.push(donatedItem)
                }
            }
            setDonateItems(donationItem);
        }
    },[donationCategories])


    return (
        <div className='my-20 w-[1320px] mx-auto flex justify-between'>
           {
             donateItems.map(donationItem => <div className='w-[648px] h-[200px] m' style={{backgroundColor:donationItem.background_color}} key={donationItem.id}>
                <div className='flex'>
                    <img className='w-[220px] h-[200px] mr-4' src={donationItem.image} alt="" />
                    <div className='py-10'>
                        <button className='btn btn-sm mb-2' style={{backgroundColor:donationItem.button_color}}>{donationItem.category}</button>
                        <h1 className='text-lg font-bold '>{donationItem.title}</h1>
                        <p className='mb-2'><span className='font-bold' style={{color:donationItem.text_color}}>${donationItem.donation_amount}</span></p>
                        <button className='btn text-white btn-sm ' style={{backgroundColor:donationItem.text_color}}>View Details</button>
                    </div>
                </div>
             </div>)
           }
        </div>
    );
};

export default Donation;