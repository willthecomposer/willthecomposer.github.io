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
