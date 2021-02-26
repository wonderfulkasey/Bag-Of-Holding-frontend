import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchCharacters} from '../actions/fetchCharacters'
import Characters from '../components/Characters'
import Character from '../components/Character'
import CharacterInput from '../components/CharacterInput'


class CharactersContainer extends React.Component {


    componentDidMount() {
       this.props.fetchCharacters()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route path='/characters/new' component={CharacterInput} />
                    <Route path='/characters/:id' render={(routerProps) => <Character {...routerProps} characters={this.props.characters}/>} />
                    <Route exact path='/characters' render={(routerProps) => <Characters {...routerProps} characters={this.props.characters}/>} />
                </Switch>
             </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}


export default connect(mapStateToProps, {fetchCharacters})(CharactersContainer)