import FeedbackForm from '@/components/form/FeedbackForm';
import React from 'react';

const AddFeedback = () => {
    return (
        <div className='space-y-4'>
            <h1 className='text-4xl font-bold text-center mt-10 '>Add feedback</h1>

            <FeedbackForm></FeedbackForm>
        </div>
    );
};

export default AddFeedback;