import React from 'react';

const FoodDetailsLoading = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Image Skeleton */}
        <div className="rounded-3xl bg-gray-200 aspect-square md:aspect-[4/3] lg:aspect-square w-full"></div>

        {/* Content Skeleton */}
        <div className="flex flex-col h-full justify-center py-2">
          {/* Badges Skeleton */}
          <div className="flex gap-2 mb-5">
            <div className="h-6 w-20 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>

          {/* Title Skeleton */}
          <div className="h-10 bg-gray-200 rounded-xl w-3/4 mb-4"></div>
          
          {/* Price Skeleton */}
          <div className="h-8 bg-gray-300 rounded-lg w-24 mb-8"></div>
          
          <hr className="border-gray-200 mb-6" />

          {/* Description Lines Skeleton */}
          <div className="space-y-3 mb-8">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>

          {/* Action Buttons Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <div className="flex-1 h-12 bg-gray-300 rounded-2xl"></div>
            <div className="flex-1 h-12 bg-gray-200 rounded-2xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetailsLoading;