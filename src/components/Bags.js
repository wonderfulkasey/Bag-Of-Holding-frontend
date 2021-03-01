import React from 'react'
import {connect} from 'react-redux'
import {deleteBag} from '../actions/deleteBag'

class Bags extends React.Component {

    state = {}

    handleDelete = (bag) => {
        this.props.deleteBag(bag.id, bag.character_id)
    }

    vote = (id) => {
        this.state[id] ? this.setState({[id]: this.state[id] += 1}) : this.setState({[id]: 1})
    }

    render() {
        return (
            <div>
                {this.props.bags && this.props.bags.map( bag =>
                    <li key={bag.id}>{bag.title} - {bag.description} 
                        <button onClick={() => this.handleDelete(bag)}>
                            Delete
                        </button>
                    </li>
                )}
            </div>
        )
    }  
}

export default connect(null, {deleteBag})(Bags)