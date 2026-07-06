'use client'
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect } from 'react';
import ReviewLoading from './ReviewLoading';
import { Anek_Bangla } from 'next/font/google';


const anek = Anek_Bangla({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
})
const RreviewPage = () => {
    const [reviews, setReviews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    console.log(reviews);
    useEffect(() => {
        fetch('https://taxi-kitchen-api.vercel.app/api/v1/reviews')
        .then(res => res.json())
        .then(data => {
            setReviews(data.reviews || [])
            setLoading(false)
        })
    },[])

    if(loading){
        return <ReviewLoading></ReviewLoading>
    }
    return (
         <div className={anek.className}>
            <h1 className='text-4xl font-bold text-center'>total {reviews.length} foods available</h1>

            <div className='grid grid-cols-3 gap-5'>
                {
                    reviews.map(reviewData=> (
                        <ReviewCard key={reviewData.id} reviewData={reviewData}></ReviewCard>
                    ))
                }
            </div>
        </div>
    );
};

export default RreviewPage;