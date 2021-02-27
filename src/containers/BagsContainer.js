import React from 'react'
import BagInput from '../components/BagInput'
import Bags from '../components/Bags'

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