'use client'
import Link from 'next/link';
import React from 'react';
import CartButton from '../buttons/CartButton';
import Image from 'next/image';

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category,id } = food;

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gray-100">
        {/* <img 
          src={foodImg} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          loading="lazy"
        /> */}
        <Image src={foodImg} 
          alt={title}
          width={300}
          height={150}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" ></Image>
        {/* Category Badge */}
        <span className="absolute top-3 right-3 bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
          {category}
        </span>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Title & Price */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{title}</h3>
          <span className="text-xl font-extrabold text-gray-900">${(price / 100).toFixed(2)}</span>
        </div>

        {/* Action Buttons */}
        <div className="mt-auto flex flex-col sm:flex-row gap-2">
          <Link 
            href={`/foods/${id}`}
            
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors duration-200"
          >
            View Details
          </Link>
          <CartButton food={food}></CartButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;