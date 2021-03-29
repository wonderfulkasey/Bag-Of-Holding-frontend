import React from 'react';
import {connect} from 'react-redux'
import CharactersContainer from './containers/CharactersContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';

class App extends React.Component {
 

  render() {
    return (
      <div className="App">
        <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
          
       <CharactersContainer/>
      </div>
    )
  }
  
}

export default App;


