import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__logo">
                <Link to="/">
                  <img src="img/logo.png" alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="footer__top__social">
                <a href="https://www.facebook.com">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://www.dribbble.com">
                  <i className="fa fa-dribbble"></i>
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
        <div className="footer__option">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="footer__option__item">
                <h5>About us</h5>
                <p>
                  Formed in 2006 by Matt Hobbs and Cael Jones, Videoprah is an
                  award-winning, full-service production company specializing.
                </p>
                <Link to="/about" className="read__more">
                  Read more <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__option__item">
                <h5>Who we are</h5>
                <ul>
                  <li>
                    <Link to="/team">Team</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact us</Link>
                  </li>
                  <li>
                    <Link to="/locations">Locations</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
              <div className="footer__option__item">
                <h5>Our work</h5>
                <ul>
                  <li>
                    <Link to="/feature">Feature</Link>
                  </li>
                  <li>
                    <Link to="/latest">Latest</Link>
                  </li>
                  <li>
                    <Link to="/archive">Browse Archive</Link>
                  </li>
                  <li>
                    <Link to="/video-for-web">Video for web</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__option__item">
                <h5>Newsletter</h5>
                <p>
                  Videoprah is an award-winning, full-service production company
                  specializing.
                </p>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit">
                    <i className="fa fa-send"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="footer__copyright__text">
                Copyright &copy; {new Date().getFullYear()} All rights reserved
                | This template is made with{" "}
                <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
