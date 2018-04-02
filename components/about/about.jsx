import React from 'react';

import AboutPhoto from './about_photo';
import AboutCopy from './about_copy';
import Contact from './contact';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="about">
        <div className="about-div">
          <AboutPhoto />
          <div className="about-info">
            <AboutCopy />
            <Contact />
          </div>
        </div>
      </div>
    )
  }
}

export default About;
