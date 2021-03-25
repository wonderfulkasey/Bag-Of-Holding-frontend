import React from 'react'
import {Route, Link} from 'react-router-dom'
//import Character from './Character'

//props are arguments passed into react comps
//passed to comps via html attributes
//how we pass fata from one comp to another as params
//PROPS ARE READ ONLY!!

const Characters = (props) => {
    return (
        <div>
            {props.characters.map(character => 
                <li key={character.id}>
                    <Link to={`/characters/${character.id}`}>{character.name}</Link>
                </li> )}
        </div>
    )
}

export default Characters