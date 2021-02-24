import React from 'react'

const Characters = (props) => {

    
    return (
        <div>
            {props.characters.map(character => <li> {character.name} </li> )}
        </div>
    )

}

export default Characters