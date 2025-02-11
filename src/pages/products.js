import React from 'react'
import Footer from './footer';
import "./product.css";
import Hero from './hero';
import MainContent from './MainContent';
import ContactForm from './Contactform';
import Navbar from '../components/Navbar';
import FlightSearch from './Search.js'

export default function products() {
  return (
    <div>
        <div>
            <Navbar />
            <Hero />  
            {/* <MainContent /> */}
            <FlightSearch/>
            <ContactForm />
            <Footer />
        </div>
    </div>
  )
}

