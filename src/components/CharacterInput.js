import React from 'react'
import {connect} from 'react-redux'
import {addCharacter} from '../actions/addCharacter'


class CharacterInput extends React.Component {

    state = {
        name: ''
    }

        //state object is where you store prop values that
        //BELONG to the comp
        //when state object changes, comp re-renders
        //state can contain many props
        //refer to state as this.state.propname
        //change value using this.setState()

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCharacter(this.state)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
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