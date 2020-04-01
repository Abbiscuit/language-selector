import React from 'react';

const Header = () => {
  return (
    <nav
      className="navbar z-depth-1 white"
      style={{
        marginBottom: 20
      }}
    >
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo left black-text">
          Lang Selector
        </a>
      </div>
    </nav>
  );
};

export default Header;
