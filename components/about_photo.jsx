import React from 'react';

class AboutPhoto extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacities: [
        "about-photo opaque",
        "about-photo clear"
      ]
    }

    this.cycleRight = this.cycleRight.bind(this);
    this.cycleLeft = this.cycleLeft.bind(this);
    this.autoCycleRight = this.autoCycleRight.bind(this);
  }

  componentDidMount() {
    this.cycle = setInterval( () => {
      this.autoCycleRight();
    }, 3000)
  }

  autoCycleRight() {
    let opacities = this.state.opacities;
    let last = opacities.pop();
    opacities.unshift(last);
    this.setState({opacities: opacities})
  }

  cycleRight() {
    let opacities = this.state.opacities;
    let last = opacities.pop();
    opacities.unshift(last);
    this.setState({opacities: opacities});
    clearInterval(this.cycle);
  }

  cycleLeft() {
    let opacities = this.state.opacities;
    let first = opacities.shift();
    opacities.push(first);
    this.setState({opacities: opacities});
    clearInterval(this.cycle);
  }

  render() {
    return(
      <div className="about-photo-container">
        <img className={this.state.opacities[0]} src="images/young-will.jpg"></img>
        <img className={this.state.opacities[1]} src="images/will.jpg"></img>
      </div>
    )
  }
}

export default AboutPhoto;

// <div onClick={this.cycleRight} className="arrow arrow-right"><img className="arrow-img" src="images/arrow-right.png"></img></div>
// <div onClick={this.cycleLeft} className="arrow arrow-left"><img className="arrow-img" src="images/arrow-left.png"></img></div>
