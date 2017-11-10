import React from 'react';

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.selectAudio = this.selectAudio.bind(this);
    this.selectVideo = this.selectVideo.bind(this);
    this.selectContact = this.selectContact.bind(this);
  }

  selectAudio() {
    this.props.swapComponent("audio");
  }
  selectVideo() {
    this.props.swapComponent("video");
  }
  selectContact() {
    this.props.swapComponent("contact");
  }

  render() {
    return(
      <div>
        <div id="navbar-hider"></div>
        <div id="navbar">
          <img id="logo" src="images/logo-bw.jpg" alt="" />
          <ul id="navbar-links">
            <li onClick={this.selectAudio} id="link-audio" className="navbar-link"><p>Audio</p></li>
            <li onClick={this.selectVideo} id="link-video" className="navbar-link"><p>Video</p></li>
            <li onClick={this.selectContact} id="link-contact" className="navbar-link"><p>Contact</p></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
