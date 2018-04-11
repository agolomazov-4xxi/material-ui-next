import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Grids from './pages/Grids';
import Buttons from './pages/Buttons';
import Selects from './pages/Selects';

class App extends Component {
  render() {
    return(
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/grids" component={Grids} />
        <Route exact path="/buttons" component={Buttons} />
        <Route exact path="/selects" component={Selects} />
      </Switch>
    );
  }
}

export default App;
