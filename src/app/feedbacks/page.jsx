import FeedbackCard from '@/components/cards/FeedbackCard';
import Link from 'next/link';
import React from 'react';
import { connect } from '../lib/dbConnect';

export const metadata = {
    title: 'All Feedbacks',
    description: 'Best Restaurent in noakhali',
}

const getFeedbacks = async () => {
    // const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/api/feedback`, {cache: 'force-cache', next: { revalidate:60 }})
    // return await res.json()

    const collection = connect("feedbacks")
    const feedbacks = await collection.find().toArray()
    return feedbacks
}
const FeedbackPage = async () => {
    const feedbacks = await getFeedbacks()
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-10'>Total {feedbacks.length} Feedbacks</h1>

            <div className='text-center mt-10'>
                <button className='btn'>
                    <Link href="/feedbacks/addFeedback" >
                        Add Feedback
                    </Link>
                </button>
            </div>

            <div className='space-y-3 p-4'>
                {
                    feedbacks.map(feedback => (
                        <FeedbackCard key={feedback._id} feedback={feedback}></FeedbackCard>
                    ))
                }
            </div>
        </div>
    );
};

export default FeedbackPage;