import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const PriceOption = ({ option }) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold'>{option.price}</span>
                <span className='text-2xl'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            <div className='flex items-center'>
                <CheckCircleIcon className='h-5 w-5 text-green-700'/>
                <p className='ml-2'>Awesome Feature</p>
            </div>
        </div>
    );
};

export default PriceOption;