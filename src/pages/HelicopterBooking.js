

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from './hero';
import MainContent from './MainContent';
import ContactForm from './Contactform';
import Footer from './footer';

// Navigation Component


// Hero Section Component
const HeroSection = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-center">
        <div className="max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6 text-white">
            Fly in Style. Book Your Private Helicopter Today.
          </h1>
          <p className="text-xl mb-8 text-white">
            Experience luxury and speed with our exclusive helicopter services.
          </p>
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-600 transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Card Component
const HelicopterCard = ({ title, description, price, features }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
      <img src="/api/placeholder/400/250" alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-yellow-500 text-2xl font-bold mb-4">{price}/hour</p>
        <div className="flex justify-center space-x-6 mb-6">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center">
              <i className={`${feature.icon} text-yellow-500 text-xl mb-2`}></i>
              <span className="block text-sm text-gray-600">{feature.text}</span>
            </div>
          ))}
        </div>
        <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors">
          Book Now
        </button>
      </div>
    </div>
  );
};

// Stats Component
const StatCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-all duration-300">
      <i className={`${icon} text-4xl text-yellow-500 mb-4`}></i>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

// Booking Form Component
const BookingForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8">Book Your Helicopter Ride</h2>
      <form className="space-y-6">
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600">Full Name</label>
          <input 
            type="text" 
            className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600">Email Address</label>
          <input 
            type="email" 
            className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-gray-600">Phone Number</label>
          <input 
            type="tel" 
            className="p-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-yellow-500 text-white py-4 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

// Main Component
const HelicopterBooking = () => {
  const helicopterCards = [
    {
      title: "VIP Helicopter",
      description: "A luxury helicopter for your business meetings or exclusive events.",
      price: "$1,500",
      features: [
        { icon: "fas fa-cogs", text: "Luxury" },
        { icon: "fas fa-users", text: "6 Seats" },
        { icon: "fas fa-tachometer-alt", text: "Fast" }
      ]
    },
    {
      title: "Executive Helicopter",
      description: "Perfect for your business trips or private tours with utmost comfort.",
      price: "$1,200",
      features: [
        { icon: "fas fa-cogs", text: "Comfort" },
        { icon: "fas fa-users", text: "4 Seats" },
        { icon: "fas fa-gift", text: "Exclusive" }
      ]
    }
  ];

  const stats = [
    {
      icon: "fas fa-users",
      title: "5000+ Clients",
      description: "Trusted by thousands worldwide"
    },
    {
      icon: "fas fa-briefcase",
      title: "10+ Years",
      description: "Of excellence in service"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
    <Navbar />
    <Hero />
  
    {/* Helicopter Cards Section */}
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Helicopters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {helicopterCards.map((card, index) => (
            <HelicopterCard key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  
    {/* Stats Section */}
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  
    {/* Booking Section */}
    <div className="py-16 bg-white">
      <ContactForm />
      <Footer />
    </div>
  </div>
  
  );
};

export default HelicopterBooking;