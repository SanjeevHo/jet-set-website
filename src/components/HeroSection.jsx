import React, { useState, useEffect } from 'react';
import anime from 'animejs';

const HeroSection = () => {
  const titles = [
    "Redefine Air Travel with Private Jets",
    "Embark on a Lavish Ocean Journey",
    "Arrive in Unparalleled Style"
  ];

  const descriptions = [
    "Redefine your air travel experience with our private jet charters. Skip the lines and soar above with unparalleled privacy, personalized service, and all the luxury you deserve. Reach your destination faster and in style.",
    "Discover the art of luxury at sea. Our premium yacht services offer unparalleled comfort and bespoke experiences, from serene ocean cruises to lavish private parties. Indulge in the ultimate maritime adventure.",
    "Turn every journey into a first-class experience with our elite selection of luxury cars. Whether for a special occasion or everyday indulgence, we offer the finest vehicles for those who demand the best on the road."
  ];

  const images = [
    "url('/images/hero-jet-bg.jpg')", 
    "url('/images/hero-yacht-bg.jpg')",
    "url('/images/hero-car-bg.jpg')" 
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const changeTitle = () => {
    const heroTitle = document.querySelector('.hero-title');
    const heroDescription = document.querySelector('.hero-description');
    const heroSection = document.querySelector('.hero');

    // Change title, description and background
    heroTitle.textContent = titles[currentTitleIndex];
    heroDescription.textContent = descriptions[currentTitleIndex];
    heroTitle.style.opacity = 0;
    heroDescription.style.opacity = 0;

    if (window.innerWidth > 768) {
      heroSection.style.backgroundImage = images[currentTitleIndex];
    }

    // Animation logic (using animejs)
    const animations = [
      {
        targets: heroTitle,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 2000,
        easing: 'easeInOutSine',
        complete: function () {
          anime({
            targets: heroTitle,
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 2000,
            easing: 'easeInOutSine',
            complete: function () {
              setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
              resetHeroTitle();
              setTimeout(changeTitle, 1000);
            }
          });
        }
      },
      {
        targets: heroTitle,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 2000,
        easing: 'easeInOutSine',
        complete: function () {
          anime({
            targets: heroTitle,
            opacity: [1, 0],
            translateX: [0, 50],
            duration: 2000,
            easing: 'easeInOutSine',
            complete: function () {
              setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
              resetHeroTitle();
              setTimeout(changeTitle, 2000);
            }
          });
        }
      },
      {
        targets: heroTitle,
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: 2000,
        easing: 'easeInOutSine',
        complete: function () {
          anime({
            targets: heroTitle,
            opacity: [1, 0],
            scale: [1, 0.5],
            duration: 2000,
            easing: 'easeInOutSine',
            complete: function () {
              setCurrentTitleIndex((currentTitleIndex + 1) % titles.length);
              resetHeroTitle();
              setTimeout(changeTitle, 500);
            }
          });
        }
      }
    ];

    anime(animations[currentTitleIndex]);

    anime({
      targets: heroDescription,
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInOutSine',
      delay: 500
    });
  };

  const resetHeroTitle = () => {
    const heroTitle = document.querySelector('.hero-title');
    heroTitle.style.transform = 'translate(0, 0) scale(1)';
    heroTitle.style.transition = 'none';
  };

  useEffect(() => {
    changeTitle();
    window.addEventListener('resize', () => {
      const heroSection = document.querySelector('.hero');
      heroSection.style.backgroundImage =
        window.innerWidth > 768 ? images[currentTitleIndex] : 'none';
    });
  }, [currentTitleIndex]);

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Experience Luxury in the Skies</h1>
        <p className="hero-description">
          Book your private jet and enjoy unparalleled comfort and service.
        </p>
        <div className="cta-buttons">
          <a href="#book" className="cta-button">Book Now</a>
          <a href="#learn-more" className="cta-button secondary">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;