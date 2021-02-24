import React from 'react';
import {connect} from 'react-redux';
import {fetchCharacters} from './actions/fetchCharacters'


class App extends React.Component {
 
componentDidMount() {
  this.props.fetchCharacters()
}

 
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

export default connect(null, {fetchCharacters})(App);


