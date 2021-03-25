import React from 'react'
import BagInput from '../components/BagInput'
import Bags from '../components/Bags'

//each comp in react has a life cycle and 3 phases:
//mounting, updating, unmounting

//mounting means putting elements in the DOM
//updating - change in the component or prop
//unmounting is when comp is removed from the DOM

//the dom defines props, methods, events, and elements as objects
//"standard for how to get, change, add, or delete elements"

class BagsContainer extends React.Component {
    render() {
        return (
            <div>
                <BagInput character={this.props.character} />
                <Bags bags={this.props.character && this.props.character.bags}/>
            </div>
        )
    }
}

export default BagsContainer