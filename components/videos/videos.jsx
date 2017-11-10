import React from 'react';

import VideoScreenshot from './video_screenshot';

class Videos extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="videos">
        <h1 className="section-header">VIDEO</h1>
        <div id="reel-div">
          <iframe id="reel" src="https://player.vimeo.com/video/241072029" width="800" height="450" allowFullScreen="true"></iframe>
        </div>
        <div className="screenshots-div">
          <VideoScreenshot keyword="nomads" title="NOMADS" description="Short Film"/>
          <VideoScreenshot keyword="counsyl" title="COUNSYL" description="Advertisement"/>
          <VideoScreenshot keyword="episode1" title="EPISODE" description="App Store Video"/>
        </div>
        <div className="screenshots-div">
          <VideoScreenshot keyword="bofa" title="BofA" description="Advertisement"/>
          <VideoScreenshot keyword="episode2" title="EPISODE" description="Advertisement"/>
        </div>
      </div>
    )
  }
}

export default Videos;

// VIDEOS HAVE A 16:9 ASPECT RATIO

// <iframe className="video" src="https://player.vimeo.com/video/219755414" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <iframe className="video" src="https://player.vimeo.com/video/197982990" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <iframe className="video" src="https://player.vimeo.com/video/165378387" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <iframe className="video" src="https://player.vimeo.com/video/174053285" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
// <iframe className="video" src="https://player.vimeo.com/video/148430902" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
