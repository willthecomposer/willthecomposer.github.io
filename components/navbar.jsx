import React from 'react';

import { NavLink, Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div id="navbar-hider"></div>
        <div id="navbar">
          <img id="logo" src="images/logo-bw.jpg" alt="" />
          <div id="navbar-links">
            <NavLink activeClassName="selected" className="navbar-link" to="/audio"><p id="link-audio">Audio</p></NavLink>
            <NavLink activeClassName="selected" className="navbar-link" to="/video"><p id="link-video">Video</p></NavLink>
            <NavLink activeClassName="selected" className="navbar-link" to="/about"><p id="link-video">About</p></NavLink>
            <NavLink activeClassName="selected" className="navbar-link" to="/contact"><p id="link-contact">Contact</p></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
