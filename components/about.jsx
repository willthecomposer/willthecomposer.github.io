import React from 'react';

import AboutPhoto from './about_photo';

class About extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="about">
        <h1 className="section-header">ABOUT</h1>
        <div className="about-info">
          <AboutPhoto />
          <div className="about-text-container">
            <p className="about-text">My name is Will and I am a New York City based composer and producer. I have written music for advertisements, video games, short films, and theater pieces.
              I've worked with music houses <a href="http://www.gimmebutter.com" target="_blank">Butter</a>, <a href="http://www.jinglepunks.com" target="_blank">Jingle Punks</a>
            , and <a href="http://www.mophonics.com" target="_blank">Mophonics</a>. I make <a href="http://www.soundcloud.com/willpjohnson" target="_blank" >beats</a> as a solo producer
            and have composed all manner of genres for all manner of clients.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
