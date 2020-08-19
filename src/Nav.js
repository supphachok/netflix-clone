import React, { useState, useEffect } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://occ-0-1223-58.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcqBskTCn3DkGQQb75keSWbkb7UvDc5R_1jJvJuDyp6GgGN_TeMbo_kPwlwmE0gwOmeTh2hNyKhotFROEYtkelSkKYmL.png"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Nav;
