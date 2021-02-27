import React from 'react'
import {connect} from 'react-redux'
import {addBag} from '../actions/addBag'

class BagInput extends React.Component {

    state = {
        title: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBag(this.state, this.props.character.id)
        this.setState({
            title: '',
            description: ''
        })
    }
    
    render () {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Bag Title:</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange}/>
                    <br/>
                    <label>Bag Description:</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addBag})(BagInput)