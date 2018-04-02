import React from 'react';

import videoLinks from './video_links';
import VideoModal from './video_modal';

class VideoScreenshot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showModal: false};

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(e) {
    this.setState({showModal: true});
  }

  closeModal(e) {
    this.setState({showModal: false});
  }

  render() {
    let video = videoLinks[this.props.keyword];
    return(
      <div>
        <div onClick={this.openModal} className="video-screenshot-div">
          <img className="video-screenshot" src={video.screenshot}></img>
          <div className="video-screenshot-info">
            <div className="video-screenshot-text">
              <h1 className="video-screenshot-title">{this.props.title}</h1>
              <h2 className="video-screenshot-description">{this.props.description}</h2>
            </div>
          </div>
        </div>
        {this.state.showModal ? <VideoModal closeModal={this.closeModal} keyword={`${this.props.keyword}-modal`} url={video.videoLink}/> : null}
      </div>
    );
  };
};

export default VideoScreenshot;
