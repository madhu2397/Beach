import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
// import Banner from './Banner';
// import Footer from './Footer';
import logo from '../../images/logo1.png';
import '../HomePage/Home.css';
import Navbar from '../../Components/Navbar/Navbar';
import Hero from '../../Components/Hero/Hero';
//import Services from '../Services/Services';
import Room from '../../Components/Room/Room';


export default function HomePage() {
    return (
        <>
        <Navbar/>
        <Hero hero="defaultHero">
        </Hero>
        <Banner classname="banner" title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
                <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link>
        </Banner>
       <Footer/>
        </>

    )
}


/*
export class HomePage extends Component {
    render() {
        return (
            <div >
            <Hero hero="defaultHero">
            </Hero>
            <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at 300$">
                    <Link to="/rooms" className="btn btn-primary">
                          Our Rooms
                    </Link>
            </Banner>
           
            </div>
        )
    }
}

export default HomePage;
*/