import React from 'react'
import {connect} from 'react-redux'
import {addBag} from '../actions/addBag'

class BagInput extends React.Component {
    render () {
        return (
            <div>
                bag input
            </div>
        )
    }
}

export default connect(null, {addBag})(BagInput)