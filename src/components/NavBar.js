import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

    return (
        <div>
            <Link to='/characters'>Characters</Link>
            <Link to='/characters/new'>Add Character</Link>
        </div>
    )
}

export default NavBar