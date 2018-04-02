import React from 'react';

class Audio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="audio">
        <div className="soundcloud-div">
          <iframe className="soundcloud" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/45387503&amp;color=%23c2c1b9&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
          <iframe className="soundcloud" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/186566215&amp;color=%23c2c1b9&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        </div>
        <div className="soundcloud-div">
          <iframe className="soundcloud" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/160420227&amp;color=%23c2c1b9&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
          <iframe className="soundcloud" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/100906166&amp;color=%23c2c1b9&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
        </div>
      </div>
    )
  }
}

export default Audio;
