import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    console.log(features);
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold'>{option.price}</span>
                    <span className='text-2xl'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature feature={feature} key={idx}/>)
            }
            <button className='bg-purple-500 w-full rounded-md py-2 font-bold mt-4'>Buy Now</button>
        </div>
    );
};

export default PriceOption;