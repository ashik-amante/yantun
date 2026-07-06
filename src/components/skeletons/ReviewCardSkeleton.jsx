import React from 'react';

const ReviewCardSkeleton = () => {
  return (
    <div className="max-w-2xl bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4 animate-pulse">
      
      {/* টপ সেকশন স্কেলিটন */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* প্রোফাইল পিকচার স্কেলিটন */}
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          {/* নাম ও ইমেইল স্কেলিটন */}
          <div className="space-y-1.5">
            <div className="h-4 bg-gray-200 rounded w-28"></div>
            <div className="h-3 bg-gray-200 rounded w-36"></div>
          </div>
        </div>

        {/* রেটিং ব্যাজ স্কেলিটন */}
        <div className="h-7 bg-gray-200 rounded-lg w-16"></div>
      </div>

      {/* রিভিউ টেক্সট স্কেলিটন */}
      <div className="space-y-2 py-1">
        <div className="h-3.5 bg-gray-200 rounded w-full"></div>
        <div className="h-3.5 bg-gray-200 rounded w-11/12"></div>
        <div className="h-3.5 bg-gray-200 rounded w-4/5"></div>
      </div>

      <hr className="border-gray-100" />

      {/* বটম সেকশন স্কেলিটন */}
      <div className="flex items-center justify-between">
        {/* ডেট স্কেলিটন */}
        <div className="h-3.5 bg-gray-200 rounded w-24"></div>
        {/* লাইক বাটন স্কেলিটন */}
        <div className="h-7 bg-gray-200 rounded-xl w-20"></div>
      </div>

    </div>
  );
};

export default ReviewCardSkeleton;