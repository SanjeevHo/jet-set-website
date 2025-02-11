/* global Swiper */
import React, { useEffect, useState } from 'react';

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the JSON file
    fetch('/json/review.json')
      .then((response) => response.json())
      .then((data) => {
        setReviews(data.reviews);
      })
      .catch((error) => console.error('Error loading reviews:', error));
  }, []);

  useEffect(() => {
    // Initialize Swiper
    if (window.Swiper) {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }
  }, [reviews]); // Re-initialize Swiper if reviews change

  return (
    <section className="testimonial-section" id="feedback-sec" >
      <h2 className="section-title">Customer Reviews</h2>
      <div className="swiper-container" data-aos="fade-up">
        <div className="swiper-wrapper">
          {reviews.map((review) => (
            <div className="swiper-slide" key={review.id}>
              <div className="testimonial-card">
                <img src={review.image} alt={review.name} className="customer-img" />
                <h3 className="customer-name">{review.name}</h3>
                <p className="customer-review">
                  {review.review.length > 100 ? `${review.review.slice(0, 100)}...` : review.review}
                </p>
                <div className="stars">{'⭐'.repeat(review.stars)}</div>
                <span className="review-date">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination (Dots) */}
        <div className="swiper-pagination"></div>
        {/* Navigation Buttons */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
