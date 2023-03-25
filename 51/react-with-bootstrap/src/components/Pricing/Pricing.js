import React from 'react';
import PriceOption from '../PriceOption/PriceOption';

const Pricing = () => {
    const pricingOptions = [
        { id: 1, name: 'Free', price: 0, features: [
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Unused featere',
            'Necessary feature',
            'Mandatory feature'
        ] },
        { id: 1, name: 'Medium', price: 9.99, features: [
            'Everything on free',
            'Extra Feature',
            'Unnecessary Feature',
            'Unused featere',
            'Necessary feature',
            'Mandatory feature'
        ] },
        { id: 1, name: 'Premium', price: 19.99, features: [
            'Everything on medium',
            'Extra Feature',
            'Unnecessary Feature',
            'Unused featere',
            'Necessary feature',
            'Mandatory feature'
        ] },
    ]
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 py-10'>Best Deal of the Town</h2>
            <div className='grid md:grid-cols-3 gap-3 mt-6'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    />)
                }
            </div>
        </div>
    );
};

export default Pricing;