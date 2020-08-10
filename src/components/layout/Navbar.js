import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({icons,title}) => {
  return (
    <nav className='navbar'>
      <h1>
      <Link to="/">  <i className={icons} />
        {title} </Link>
      </h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Github Finder",
  icons: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.string.isRequired,
};
export default Navbar;
