"use client";

import Image from 'next/image';
import React, { useState } from 'react';

const ReviewCard = ({ reviewData }) => {
  const { user, email, photo, rating, review, likes, date } = reviewData;
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);

  // লাইক হ্যান্ডেল করার ফাংশন
  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  // ডেট ফরম্যাট করার জন্য
  const formattedDate = new Date(date).toLocaleDateString('bn-BD', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="max-w-2xl bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-4">

      {/* টপ সেকশন: ইউজার ইনফো এবং রেটিং */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          {/* <img
            src={photo}
            alt={user}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
          /> */}

          <Image
            src={photo}
            alt={user}
            width={48}
            height={48}
            className="w-12 h-12 rounded-full object-cover border-2 border-gray-100" ></Image>
          <div>
            <h4 className="font-bold text-gray-800 text-base leading-tight">{user}</h4>
            <p className="text-xs text-gray-400">{email}</p>
          </div>
        </div>

        {/* স্টার রেটিং (Rating) */}
        <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
          <span className="text-amber-500 font-bold text-sm">{rating}.0</span>
          <div className="flex text-amber-400 text-sm">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className={`w-4 h-4 ${index < rating ? 'fill-current' : 'text-gray-200'}`}
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* রিভিউ টেক্সট */}
      <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
        {review}
      </p>

      <hr className="border-gray-100" />

      {/* বটম সেকশন: লাইক বাটন এবং ডেট */}
      <div className="flex items-center justify-between text-xs text-gray-500">
        <span className="font-medium">{formattedDate}</span>

        {/* লাইক বাটন */}
        <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all duration-200 ${liked
              ? 'bg-rose-50 text-rose-600 font-semibold'
              : 'bg-gray-50 hover:bg-gray-100 text-gray-600'
            }`}
        >
          <svg
            className={`w-4 h-4 transition-transform active:scale-125 ${liked ? 'fill-current text-rose-500' : 'stroke-current'}`}
            fill={liked ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{likeCount} Likes</span>
        </button>
      </div>

    </div>
  );
};

export default ReviewCard;