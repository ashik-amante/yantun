import FoodCard from '@/components/cards/FoodCard';
import React from 'react';
import CartItem from './CartItem';
import InputSearch from '@/components/InputSearch';

const getFoods = async (search) => {
    const res = await fetch(` https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,{next: { revalidate: 10 }})

    const data = await res.json()
    return data.foods || []
}


export const metadata = {
  title: 'All Foods',
  description: 'Best Restaurent in noakhali',
}
 

const FoodPage = async ({searchParams}) => {
    const {search = ''} = await searchParams
    console.log(search);
    const foods = await getFoods(search)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return (
        <div className='space-y-3'>
            <h1 className='text-4xl font-bold text-center mt-10'>Total {foods.length} foods available</h1>

            <div>
                <InputSearch></InputSearch>
            </div>

            <div className='flex gap-2'>
                <div className='grid grid-cols-3 gap-5 flex-1'>
                    {
                        foods.map(food => (
                            <FoodCard key={food.id} food={food}></FoodCard>
                        ))
                    }
                </div>
                <div className='w-64 p-4 border-2 rounded-2xl'>
                    <h2 className='font-bold text-3xl text-center'>Cart Items</h2>
                    <CartItem></CartItem>
                </div>
            </div>
        </div>
    );
};

export default FoodPage;