import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="contact">
        <h1 className="section-header">CONTACT</h1>
        <div id="contact-info">
          <div className="contact-grouping">
            <div className="contact-item">
              <a href="mailto:will.p.johnson@gmail.com"><i className="clickable fa fa-envelope" aria-hidden="true"></i></a>
              <h2 className="contact-text">will.p.johnson@gmail.com</h2>
            </div>
          </div>
          <div className="contact-grouping">
            <div className="contact-item">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <h2 className="contact-text">973-943-9032</h2>
            </div>
            <div className="contact-item">
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <h2 className="contact-text">Brooklyn, NY</h2>
            </div>
          </div>
          <div className="contact-grouping">
            <div className="contact-item">
              <a href="http://www.twitter.com/willpjohnson" target="_blank"><i className="clickable fa fa-twitter" aria-hidden="true"></i></a>
              <h2 className="contact-text">@willpjohnson</h2>
            </div>
            <div className="contact-item">
              <a href="http://www.instagram.com/willpjohnson" target="_blank"><i className="clickable fa fa-instagram" aria-hidden="true"></i></a>
              <h2 className="contact-text">willpjohnson</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
