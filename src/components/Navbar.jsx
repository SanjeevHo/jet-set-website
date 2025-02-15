import React, { useEffect } from 'react';
// import '..pages/navbar.css';
import '../pages/navbar.css';

const Navbar = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const menuLinks = document.querySelectorAll('.menu ul a');

    const handleScroll = () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    const handleClick = () => {
      document.getElementById('check').checked = false;
    };

    window.addEventListener('scroll', handleScroll);
    menuLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <nav>
      <div className="menu">
        <input type="checkbox" id="check" />
        <div className="logo">
          <a href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <ul>
          <label className="btn cancel" htmlFor="check">
            <i className="fas fa-times"></i>
          </label>
          <li>
            <a href="/" className="active">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li><a href="/">Deal of The Day</a></li>
          <li>
            <a href="#explore-sec">Explore</a>
            <ul className="sub-menu">
              <li><a href="/p">Jets</a></li>
              <li><a href="/helicopter">Chooper</a></li>
              <li><a href="/yatch.html">YATCH</a></li>
              
              <li><a href="/c">Car</a> </li>
            </ul>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="#contact-sec">Contact</a>
          </li>
          <li>
            <a>
              <button className="login-button">Enquiry</button>
            </a>
          </li>
        </ul>
        <label htmlFor="check" className="btn bars">
          <i className="fas fa-bars"></i>
        </label>
      </div>
    </nav>
  );
};

export default Navbar;