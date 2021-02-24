import React from 'react'
import {connect} from 'react-redux';

import Characters from '../components/Characters'
import CharacterInput from '../components/CharacterInput'


class CharactersContainer extends React.Component {

    render() {
        return (
            <div>
            <CharacterInput/>
            <Characters/>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}


export default connect()[CharactersContainer]