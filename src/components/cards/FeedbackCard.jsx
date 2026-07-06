"use client";

import React from 'react';

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { name, message, date } = feedback;
  console.log(feedback);

  // ডেট ফরম্যাট করার জন্য
  const formattedDate = new Date(date).toLocaleDateString();
  const formattedTime = new Date(date).toLocaleTimeString();

  return (
    <div className="max-w-md w-full dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
      
      {/* টপ সেকশন: ইউজার আইকন ও নাম */}
      <div className="flex items-center justify-between gap-2">
        {/* ইউজারের নামের প্রথম অক্ষর দিয়ে তৈরি গোল প্রোফাইল অবতার */}
        <div className="w-10 h-10 rounded-full bg-orange-300 dark:bg-orange-200 text-orange-600 dark:text-orange-400 font-bold flex items-center justify-center uppercase text-base">
          {name ? name.charAt(0) : 'U'}
        </div>
        <div>
          <h4 className="font-bold text-gray-200 dark:text-gray-100 text-sm capitalize  ">{name}</h4>
          <p className="text-[11px] text-gray-400 dark:text-gray-500">{formattedDate} {" "}{formattedTime}</p>
        </div>
      </div>

      {/* মেসেজ বডি */}
      <p className="text-white dark:text-gray-300 text-sm leading-relaxed min-h-10">
        {message}
      </p>

      {/* অ্যাকশন বাটন সেকশন */}
      <div className="flex gap-2 mt-2 pt-3 border-t border-gray-50 dark:border-gray-900">
        {/* আপডেট বাটন */}
        <button 
          onClick={() => onUpdate && onUpdate(feedback)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-950/60 rounded-xl transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
          Update
        </button>

        {/* ডিলিট বাটন */}
        <button 
          onClick={() => onDelete && onDelete(feedback._id)}
          className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/60 rounded-xl transition-colors cursor-pointer"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
          Delete
        </button>
      </div>

    </div>
  );
};

export default FeedbackCard;