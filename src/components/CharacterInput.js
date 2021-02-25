import React from 'react'



class CharacterInput extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <label> Character Name</label> <br/>
                    <input type='text' placeholder='Name'>

                    </input>
                </form>
            </div>
        )
    }

}

export default CharacterInput