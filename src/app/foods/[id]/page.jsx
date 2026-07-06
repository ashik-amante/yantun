import { redirect } from 'next/navigation';
import React from 'react';

export function generateStaticParams() {
  return [
    { id: '52927' },
    { id: '52802' },
    { id: '53017' },
  ]
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const food = await getSingleFood(id);
  if(!food){
    return {
      title: 'No food item found!',
      description: 'Best Restaurent in noakhali',
    };
  }
  return {
    title: food.title,
    description: 'Best Restaurent in noakhali',
  };
}
const getSingleFood = async (id) => {
  try {
    const res = await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}` );
    
    if (!res.ok) return null;
    
    const data = await res.json();
    return data.details || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

const FoodDetails = async ({ params }) => {
  const { id } = await params;
  const food = await getSingleFood(id);

  if (!food?.title) {
    redirect('/foods');
    // return (
    //   <div className="min-h-[50vh] flex items-center justify-center">
    //     <h2 className="text-xl font-semibold text-gray-600">No food item found!</h2>
    //   </div>
    // );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        
        {/* Left: Product Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 aspect-square md:aspect-[4/3] lg:aspect-square">
          <img 
            src={foodImg} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col h-full justify-center">
          {/* Badges */}
          <div className="flex gap-2 mb-4">
            <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {category}
            </span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              {area} Culture
            </span>
          </div>

          {/* Title & Price */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">{title}</h1>
          <p className="text-2xl font-black text-gray-800 mb-6">${(price / 100).toFixed(2)}</p>
          
          <hr className="border-gray-200 mb-6" />

          {/* Short Static Description placeholder for layout aesthetics */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Indulge in our freshly prepared {title}. Made perfectly with premium {category?.toLowerCase()}-friendly ingredients adhering to authentic {area} culinary styles.
          </p>

          {/* Action Callouts */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="flex-1 px-6 py-3.5 text-base font-medium text-white bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-2xl transition-colors duration-200 shadow-md shadow-green-100 text-center">
              Add to Cart
            </button>
            {video && (
              <a 
                href={video} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 px-6 py-3.5 text-base font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-colors duration-200 text-center border border-gray-200"
              >
                Watch Recipe Video
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetails;