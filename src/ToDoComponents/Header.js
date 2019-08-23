import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="social-media">

          <a href="https://facebook.com/lightworthng"><i className="fab fa-facebook"></i></a>
          <a href="https://twitter.com/lightworthng"><i className="fab fa-twitter-square"></i></a>
          <a href="https://instagram.com/lightworthng"><i className="fab fa-instagram"></i></a>
          <a href="https://wa.me/2349060402887"><i className="fab fa-whatsapp"></i></a>
          <a href="https://github.com/lightworthng"><i className="fab fa-github"></i></a>
        </div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <a href="./index.html" title="Lightworth Computing">
                <img className="logo-image" alt='Lightworth Logo' src="https://i.ibb.co/mqz9hDK/lightworth-logo.png" />
                <span className="logo-name">Lightworth <br /> Computing</span>

              </a>
            </div>
            <span className="menu"><i className="fa fa-bars"></i></span>
            {/* <div className="navlinks row">
              <a href="./docs.html" className="navlink">Docs</a>
              <a href="./feedback.html" className="navlink">Feedback</a>

            </div> */}
          </div>
        </nav>

      </header>
    );
  }
}

export default Header;