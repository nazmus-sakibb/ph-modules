import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .then(data => console.log(data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phonesLoaded = data.data.data;
                const phoneData = phonesLoaded.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const singlePhone = {
                        name: phone.phone_name,
                        price: price 
                    }
                    return singlePhone;
                })
                console.log(phoneData);
                setPhones(phoneData);
            });

    }, [])
    return (
        <div>

        </div>
    );
};

export default PhoneBar;