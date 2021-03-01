
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import {Link} from 'react-router-dom'


const NavBar = (props) => {

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand">BAG OF HOLDING</a>
          <a class="navbar-brand" href="/characters">All Characters</a>
          
          <a class="navbar-brand" href="/characters/new">New Character</a>
         
        </div>
      </nav>
    


        
    )
}

export default NavBar