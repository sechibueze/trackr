import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <ul className="features clearfix">

        <li>
          <div className="ft-item">
            <i className="fa fa-lightbulb"></i>
            <h4>Simple Ideas</h4>
          </div>
        </li>
        <li>
          <div className="ft-item">
            <i className="fa fa-check-circle"></i>
            <h4>Robust</h4>
          </div>
        </li>
        <li>
          <div className="ft-item">
            <i className="fa fa-play-circle"></i>
            <h4>Smile Fast </h4>
          </div>
        </li>
        <li>
          <div className="ft-item">
            <i className="fa fa-handshake"></i>
            <h4>Connect</h4>

          </div>
        </li>
      </ul>
    );
  }
}

export default Footer;