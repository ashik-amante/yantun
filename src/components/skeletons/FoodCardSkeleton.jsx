import React from 'react';

const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100 flex flex-col animate-pulse">
      {/* Image Skeleton */}
      <div className="h-48 w-full bg-gray-200 relative">
        {/* Badge Skeleton */}
        <div className="absolute top-3 right-3 w-20 h-6 bg-gray-300 rounded-full"></div>
      </div>

      {/* Content Skeleton */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Price Skeleton */}
        <div className="flex justify-between items-center mb-6">
          <div className="h-5 bg-gray-200 rounded-md w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded-md w-16"></div>
        </div>

        {/* Buttons Skeleton */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <div className="flex-1 h-9 bg-gray-200 rounded-xl"></div>
          <div className="flex-1 h-9 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;