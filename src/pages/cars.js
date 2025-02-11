import React from 'react'
import Footer from './footer';
import Hero from './hero';
import CarMainContent from './Car_MainContent';
import ContactForm from './Contactform';
import Navbar from '../components/Navbar';


export default function Cars() {
  return (
    <div>
        <div>
            <Navbar />
            <Hero />  
            <CarMainContent />
            <ContactForm />
            <Footer />
        </div>
    </div>
  )
}
