import React from 'react';
import RreviewPage from './ReviewPage';

export const metadata = {
//   title: 'All Reviews',
title: {
    absolute: 'Satisfied Customers',
},
  description: 'Best Restaurent in noakhali',
}
 

const AllReviews = () => {
    return (
        <div>
            <RreviewPage></RreviewPage>
        </div>
    );
};

export default AllReviews;