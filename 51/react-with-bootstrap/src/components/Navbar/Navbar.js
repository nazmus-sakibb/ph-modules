import React from 'react';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        {id: 1, name: 'Home', path: './home'},
        {id: 2, name: 'Products', path: './home'},
        {id: 3, name: 'Orders', path: './home'},
        {id: 4, name: 'Contact', path: './home'},
        {id: 5, name: 'About', path: './home'},
    ]
    return (
        <nav>
            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <Link key={route.id} route={route}/>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;