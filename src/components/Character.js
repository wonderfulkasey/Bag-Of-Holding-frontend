import React from 'react'
import {Redirect} from 'react-router-dom'
import CharacterEdit from './CharacterEdit'

import BagsContainer from '../containers/BagsContainer'

const Character = (props) => {

    let character = props.characters.filter(character => character.id == props.match.params.id)[0]
    console.log(character)

    return (
        <div>
            <h3>
            {character ? character.name : null}
            </h3>
            
            <BagsContainer character={character}/>
            <h4>Edit Character Name</h4>
            <CharacterEdit character={character}/>
        </div>
   )
}

export default Character