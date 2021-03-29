import React from 'react';
import {connect} from 'react-redux'
import CharactersContainer from './containers/CharactersContainer'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './containers/DashboardContainer';

class App extends React.Component {
 

  render() {
    return (
      <div className="App">
        <DashboardContainer/>

       <CharactersContainer/>
      </div>
    )
  }
  
}

export default App;


