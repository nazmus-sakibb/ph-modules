import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Feature = ({featuer}) => {
    return (
        <div className='flex items-center'>
            <CheckCircleIcon className='h-5 w-5 text-green-700' />
            <p className='ml-2'>Awesome Feature</p>
        </div>
    );
};

export default Feature;