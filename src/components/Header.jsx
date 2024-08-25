import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="header__logo">
                <Link to="/">
                  {/* <img src="img/logo.png" alt="Logo" /> */}
                  <h4 style={{ color: "white" }}>CraftedByAbhi</h4>
                </Link>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="header__nav__option">
                <nav className="header__nav__menu mobile-menu">
                  <ul>
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="#">Pages</Link>
                      <ul className="dropdown">
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                          <Link to="/blog-details">Blog Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
                <div className="header__nav__social">
                  <a href="https://www.facebook.com">
                    <i className="fa fa-github"></i>
                  </a>
                  <a href="https://www.twitter.com">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="https://www.dribbble.com">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="https://www.instagram.com">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="https://www.youtube.com">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="mobile-menu-wrap"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
