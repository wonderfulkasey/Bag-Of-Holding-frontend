import React from 'react';
import {connect} from 'react-redux'
import CharactersContainer from './containers/CharactersContainer'


class App extends React.Component {
 

  render() {
    return (
      <div className="App">
       <CharactersContainer/>
      </div>
    );
  }
  
}

export default App;


