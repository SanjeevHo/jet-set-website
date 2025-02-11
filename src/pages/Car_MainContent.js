import React from 'react';
import CarSearchComponent from './CarSearchComponent';
import CarFilters from './carfilter';
import "./Car_MainContent.css" 


function CarMainContent() {
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
          img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
          title: "King Air C90",
          description: "Twin Engine Turboprop",
          totalTime: "19 Hrs 30 Min",
          pax: 6,
          price: "INR 28,75,400/-"
        },
        {
          img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
          title: "King Air C90",
          description: "Twin Engine Turboprop",
          totalTime: "19 Hrs 30 Min",
          pax: 6,
          price: "INR 28,75,400/-"
        },
        {
          img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
          title: "King Air C90",
          description: "Twin Engine Turboprop",
          totalTime: "19 Hrs 30 Min",
          pax: 6,
          price: "INR 28,75,400/-"
        },
        {
            img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
            title: "King Air C90",
            description: "Twin Engine Turboprop",
            totalTime: "19 Hrs 30 Min",
            pax: 6,
            price: "INR 28,75,400/-"
          },
          {
            img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
            title: "King Air C90",
            description: "Twin Engine Turboprop",
            totalTime: "19 Hrs 30 Min",
            pax: 6,
            price: "INR 28,75,400/-"
          },
          {
            img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg?t=st=1729595890~exp=1729599490~hmac=39628bd738d3d79f62b0683e1cec809efbf1438e5a92503cf2f540f0b23eb7b5&w=900",
            title: "King Air C90",
            description: "Twin Engine Turboprop",
            totalTime: "19 Hrs 30 Min",
            pax: 6,
            price: "INR 28,75,400/-"
          }
      ];
      
    return (
        <div className="main-components">
            <CarSearchComponent />
            <section className="category-listing" >
              
                <div className="main-section-part" data-aos="fade-up">
                    <div className="filter-sidebar-part">
                      <div className="filter-sidebar-subsection-part">
                        <CarFilters />
                      </div>
                    </div>
                    

                    <div className="cards-container-part">
                        {cardData.map((card, index) => (
                            <div className="card-part" data-aos="fade-up" key={index}>
                                <img src={card.img} alt={card.title} />
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                                <p>Total Time: {card.totalTime}</p>
                                <p>Pax: {card.pax}</p>
                                <p>{card.price}</p>
                                <button>View Details</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>                
        </div>
    )
}

export default CarMainContent;