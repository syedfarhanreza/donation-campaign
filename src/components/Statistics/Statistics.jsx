import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredDonationApplication } from '../../utility/localstorage';
import { Cell, Label, Pie, PieChart } from 'recharts';

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

    const totalPercentage = totalAmount !== 0 ? (totalDonateAmount / totalAmount) * 100 : 0;
    const donatedPercentage = 100 - totalPercentage;

    return (
        <div className='flex justify-center'>
            <PieChart width={500} height={500}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="#8884d8"
                    label
                >
                    <Label
                        value={`${totalPercentage.toFixed(2)}%`}
                        position="center"
                        fill="#FFFFFF"
                        fontSize={24}
                        style={{ fontWeight: 'bold'}}
                    />
                    <Label
                        value={`${donatedPercentage.toFixed(2)}%`}
                        position="insideBottom"
                        fill="#FFFFFF"
                        fontSize={24}
                        style={{ fontWeight: 'bold' }}
                    />
                    <Cell fill="#FF444A" />
                    <Cell fill="#00C49F" />
                </Pie>
            </PieChart>
            
        </div>
    );
};

export default Statistics;