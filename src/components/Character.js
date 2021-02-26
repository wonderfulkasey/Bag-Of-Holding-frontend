import React from 'react'


const Character = (props) => {

    let character = props.characters[props.match.params.id - 1]
    console.log(character)

    return (
        <li>
         {character ? character.name : null}
        </li>
    )
}

export default Character