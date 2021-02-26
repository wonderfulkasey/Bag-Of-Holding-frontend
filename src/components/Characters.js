import React from 'react'
import {Route, Link} from 'react-router-dom'
import Character from './Character'

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