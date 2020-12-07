import React from 'react'
import Hero from '../../Components/Hero/Hero';
import Banner from '../../Components/Banner/Banner';
import {Link} from 'react-router-dom';
import '../Error/Error.css';


export default function Error() {
    return (
        <Hero>
           <Banner title='404' subtitle="Oops! Page not found">
            <Link to="/" className="btn-primary">
                Return Home
            </Link>
               </Banner> 
        </Hero>
    );
}
