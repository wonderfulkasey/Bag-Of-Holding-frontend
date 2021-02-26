import React from 'react'
import {Redirect} from 'react-router-dom'

import BagsContainer from '../containers/BagsContainer'

const Character = (props) => {

    let character = props.characters[props.match.params.id - 1]
    console.log(character)

    return (
        <div>
            <h3>
            {character ? character.name : null}
            </h3>
            
            <BagsContainer character={character}/>
        </div>
   )
}

export default Character