import React from 'react'
import {connect} from 'react-redux'
import {deleteBag} from '../actions/deleteBag'
import BagLiker from '../components/BagLiker'

//class component - stateful
//react lifecycle methods can be used
//can pass props down to class comps
//and access them w this.props
class Bags extends React.Component {

    state = {}

    handleDelete = (bag) => {
        this.props.deleteBag(bag.id, bag.character_id)
    }

    render() {
        return (
            <div>
                {this.props.bags && this.props.bags.map(bag =>
        
                    <li key={bag.id}>{bag.title} - {bag.description}  <br/>
                    <BagLiker></BagLiker>
                       
                    </li>
                )}
            </div>
        )
    }  
}

export default connect(null, {deleteBag})(Bags)


//future delete button, in between li key tags
//  <button onClick={() => this.handleDelete(bag)}>            
// Delete
// </button> 