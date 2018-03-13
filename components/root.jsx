import React from 'react';
import { HashRouter, Switch, Route, Navlink, Link } from 'react-router-dom';

import Navbar from './navbar';
import Videos from './videos/videos';
import Audio from './audio/audio';
import Contact from './contact';
import About from './about';

const Root = () => {
  return(
    <div className="whole-thing">
      <HashRouter>
        <div>
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/" component={Videos} />
            <Route exact path="/video" component={Videos} />
            <Route exact path="/audio" component={Audio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}

export default Root;
