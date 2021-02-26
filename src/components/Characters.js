import React from 'react'
import {Route, Link} from 'react-router-dom'
import Character from './Character'

const Characters = (props) => {
    return (
        <div>

            {props.characters.map(character => 
                <div key={character.id}><Character character={character}/></div> )}
        
        </div>
    )
}

export default Characters