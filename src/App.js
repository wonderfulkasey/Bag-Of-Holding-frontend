import React from 'react';
import {connect} from 'react-redux';
import CharactersContainer from './containers/CharactersContainer.js'


class App extends React.Component {
 

  render() {
    return (
      <div className="App">
       App
      </div>
    );
  }
  
}

//const mapStateToProps = (state) => {
 // return {
 //   characters: state.characters
 // }
// }

export default connect()(App);


