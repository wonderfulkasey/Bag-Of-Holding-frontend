import React from 'react'
import {connect} from 'react-redux'
import {addCharacter} from '../actions/addCharacter'


class CharacterInput extends React.Component {

    state = {name: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCharacter(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label> Character Name</label> <br/>
                    <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/>
                    <input type="submit"/>
                    <br/> <br/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addCharacter})(CharacterInput)