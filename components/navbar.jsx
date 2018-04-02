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
            <NavLink activeClassName="selected" className="navbar-link" to="/personal"><p id="link-audio">Personal</p></NavLink>
            <NavLink activeClassName="selected" className="navbar-link" to="/professional"><p id="link-video">Professional</p></NavLink>
            <NavLink activeClassName="selected" className="navbar-link" to="/info"><p id="link-video">Info</p></NavLink>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar);
