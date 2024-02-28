import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationApplication } from '../../utility/localstorage';
import { PieChart, Pie, Cell } from 'recharts';

const Statistics = () => {

    const donations = useLoaderData();

    const [totalAmount, setTotalAmount] = useState(0);
    const [donateItems, setDonateItems] = useState([]);
    const [totalDonateAmount, setTotalDonateAmount] = useState(0);

    useEffect(() => {
        const storedDonationIds = getStoredDonationApplication();
        if (donations.length > 0) {
            const donationItem = [];
            for (const id of storedDonationIds) {
                const donatedItem = donations.find(donation => donation.id === id);
                if (donatedItem) {
                    donationItem.push(donatedItem)
                }
            }
            setDonateItems(donationItem);
        }
    }, [donations]);

    useEffect(() => {
        const totalDonatedAmount = donateItems.reduce((total, donation) => total + donation.donation_amount, 0);
        setTotalDonateAmount(totalDonatedAmount);
    }, [donateItems]);

    useEffect(() => {
        const total = donations.reduce((total, donation) => total + donation.donation_amount, 0);
        setTotalAmount(total);
    }, [donations]);

    const data = [
        { name: 'Total Amount', value: totalAmount },
        { name: 'Total Donated Amount', value: totalDonateAmount }
    ];

    const COLORS = ['#FF444A', '#00C49F'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div>
            <div className='flex justify-center font-bold text-lg'>
                <PieChart width={500} height={500}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
            </div>
            <div className='flex justify-center'>
                <div className='flex mr-10'>
                    <div><h1 className='mr-2'>Your Donation</h1></div>
                    <div className='w-24 h-3 border bg-[#00C49F] mt-2'></div>
                </div>
                <div className='flex '>
                    <div><h1 className='mr-2'>Total Donation</h1></div>
                    <div className='w-24 h-3 border bg-[#FF444A] mt-2'></div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
