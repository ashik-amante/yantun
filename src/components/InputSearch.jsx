'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {
    const reuter = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleSubmit = (e) => {
        e.preventDefault();
        const search = e.target.search.value.trim()
        console.log(search);

        const params = new URLSearchParams(searchParams)
        params.set('search', search)
        reuter.push(`${pathname}?${params.toString()}`)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                name='search'
                className='px-4 py-3 border-2 rounded-xl mr-4 w-80' type="text" placeholder='Search food name or category' />
                <button className='bg-orange-400 px-4 py-2 font-bold rounded-xl cursor-pointer'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;