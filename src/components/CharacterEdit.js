import React from 'react'
import {connect} from 'react-redux'
import {editCharacter} from '../actions/editCharacter'

class CharacterEdit extends React.Component {

    state = {
        name: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        let character = {...this.state, id: this.props.character.id}
        this.props.editCharacter(character)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Character Name</label>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {editCharacter})(CharacterEdit)