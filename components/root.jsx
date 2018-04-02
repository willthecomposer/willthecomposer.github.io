import React from 'react';
import { HashRouter, Switch, Route, Navlink, Link } from 'react-router-dom';

import Navbar from './navbar';
import Videos from './videos/videos';
import Audio from './audio/audio';
import About from './about/about';

const Root = () => {
  return(
    <div className="whole-thing">
      <HashRouter>
        <div>
          <Route path="/" component={Navbar} />
          <Switch>
            <Route exact path="/" component={Videos} />
            <Route exact path="/professional" component={Videos} />
            <Route exact path="/personal" component={Audio} />
            <Route exact path="/info" component={About} />
          </Switch>
        </div>
      </HashRouter>
    </div>
  )
}

export default Root;
