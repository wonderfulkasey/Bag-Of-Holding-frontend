import React from 'react'
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


export default CharactersContainer