import React from 'react';

const PriceOption = ({ option }) => {
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold'>{option.price}</span>
                <span className='text-2xl'>/mon</span>
                </h3>
                <p>{option.name}</p>
            </div>
        </div>
    );
};

export default PriceOption;