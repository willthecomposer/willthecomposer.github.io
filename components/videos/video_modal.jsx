import React from 'react';

class VideoModal extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return(
      <div id={this.props.keyword} className="video-modal">
        <div onClick={this.props.closeModal} className="video-modal-cover"></div>
        <div className="video-modal-content">
          <iframe className="video" src={this.props.url} width="800" height="450" allowFullScreen="true"></iframe>
        </div>
      </div>
    )
  }
}

export default VideoModal;


// webkitallowfullscreen mozallowfullscreen allowfullscreen
