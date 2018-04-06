import React from 'react';

import VideoScreenshot from './video_screenshot';

class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="videos">
        <div className="screenshots-div">
          <VideoScreenshot keyword="counsyl" title="COUNSYL" description="Advertisement"/>
          <VideoScreenshot keyword="nomads" title="NOMADS" description="Short Film"/>
          <VideoScreenshot keyword="episode1" title="EPISODE" description="App Store Video"/>
          <VideoScreenshot keyword="bofa" title="BofA" description="Advertisement"/>
        </div>
        <div className="screenshots-div">
          <VideoScreenshot keyword="mercedes" title="MERCEDES" description="Advertisement"/>
          <VideoScreenshot keyword="episode2" title="EPISODE" description="Advertisement"/>
          <VideoScreenshot keyword="cutwater" title="CUTWATER" description="Holiday Card"/>
          <VideoScreenshot keyword="drpepper" title="DR PEPPER" description="Advertisement"/>
        </div>
      </div>
    )
  }
}

export default Videos;
