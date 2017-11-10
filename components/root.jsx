import React from 'react';

import Navbar from './navbar';
import Videos from './videos/videos';
import Audio from './audio/audio';
import Contact from './contact';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: "video"}

    this.swapComponent = this.swapComponent.bind(this);
  }

  swapComponent(selected) {
    this.setState({selected})
  }

  render() {
    let page = null;
    if (this.state.selected === "video") {
      page = <Videos />;
    } else if (this.state.selected === "audio") {
      page = <Audio />;
    } else if (this.state.selected === "contact") {
      page = <Contact />;
    } else {
      page = <Videos />
    }


    return(
      <div className="whole-thing">
        <Navbar swapComponent={this.swapComponent} />
        {page}
      </div>
    )
  }
}

export default Root;
