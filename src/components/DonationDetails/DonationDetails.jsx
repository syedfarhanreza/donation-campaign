import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { saveDonationApplication } from '../../utility/localstorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonationDetails = () => {

    const donations = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const donation = donations.find(donation => donation.id === idInt);
    const { image, title, description, donation_amount, text_color } = donation;

    const handleDonate = () => {
        saveDonationApplication(idInt);
        toast('You have Donated successfully');
    }

    return (
        <div className='w-10/12 mx-auto my-20 '>
            <div className='relative'>
                <img src={image} alt={title} className='w-full h-[700px] rounded-lg' />
                <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4'>
                    <div className='my-2 ml-9'>
                        <button onClick={handleDonate} className=' btn text-white py-2 px-4 ' style={{backgroundColor: text_color}}>Donate ${donation_amount}</button>
                    </div>
                </div>
            </div>
            <div className='my-10'>
                <h2 className='text-xl font-bold mb-2'>{title}</h2>
                <p className='text-lg'>{description}</p>
            </div>
            <ToastContainer />
        </div>
    );
};
export default DonationDetails;