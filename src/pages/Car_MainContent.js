import React, { useState } from 'react';
import "./FlightSearch.css";

const cardData = [
  {
    img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
    title: "Audi A5",
    description: "Convertable",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://hips.hearstapps.com/amv-prod-cad-assets.s3.amazonaws.com/wp-content/uploads/2017/03/2017-bugatti-chiron.jpg",
    title: "Bugatti Chiron",
    description: "Bugatti Chiron",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://th.bing.com/th/id/OIP.Ogo7SswTG3ARSaqUgNyCmAHaEK?rs=1&pid=ImgDetMain",
    title: "Lamborghini Aventador",
    description: "Lamborghini Aventador",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
    img: "https://www.classicdriver.com/sites/default/files/cars_images/feed_681175/mclaren-p1-033.jpg",
    title: "McLaren P1",
    description: "McLaren P1",
    totalTime: "19 Hrs 30 Min",
    pax: 6,
    price: "INR 28,75,400/-"
  },
  {
      img: "https://s1.cdn.autoevolution.com/images/gallery/PORSCHE-918-Spyder-5142_26.jpg",
      title: "Porsche 918 Spyder",
      description: "Porsche 918 Spyder",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    },
    {
      img: "https://th.bing.com/th/id/OIP.MA4MAptPvidIi1XFQy25SQHaEK?rs=1&pid=ImgDetMain",
      title: "Koenigsegg Jesko",
      description: "Koenigsegg Jesko",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    },
    {
      img: "https://th.bing.com/th/id/OIP.5nlRTc_kqwbX7ZuuUt4f3wHaEK?rs=1&pid=ImgDetMain",
      title: "Aston Martin Valkyrie",
      description: "Twin Engine Turboprop",
      totalTime: "19 Hrs 30 Min",
      pax: 6,
      price: "INR 28,75,400/-"
    }
];

export default function CarComponent() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [filteredJets, setFilteredJets] = useState(cardData);

  const handleFilter = () => {
    const filtered = cardData.filter(
      (car) =>
        (departure ? car.title.toLowerCase().includes(departure.toLowerCase()) : true) &&
        (destination ? parseInt(car.price.replace(/[^0-9]/g, ""), 10) <= parseInt(destination, 10) : true)
    );
    setFilteredJets(filtered);
  };

  return (
    <div className="container">
      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Enter car name" 
          value={departure} 
          onChange={(e) => setDeparture(e.target.value)}
          className="dropdown"
        />

        <input 
          type="number" 
          placeholder="Max Price (INR)" 
          value={destination} 
          onChange={(e) => setDestination(e.target.value)}
          className="dropdown"
        />

        <button onClick={handleFilter} className="search-button">
          Search
        </button>
      </div>

      {/* No Cars Message */}
      {filteredJets.length === 0 ? (
        <p className="no-flights">No cars available for that filter.</p>
      ) : (
        <div className="card-container">
          {filteredJets.map((car, index) => (
            <div key={index} className="card">
              <img src={car.img} alt={car.title} className="card-image" />
              <h3 className="card-title">{car.title}</h3>
              <p className="card-description">{car.description}</p>
              <p><strong>Travel Time:</strong> {car.totalTime}</p>
              <p><strong>Passengers:</strong> {car.pax}</p>
              <p className="price">{car.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
