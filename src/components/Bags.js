import React from 'react'
import {connect} from 'react-redux'
import {deleteBag} from '../actions/deleteBag'

const Bags = (props) => {

    const handleDelete = (bag) => {
        props.deleteBag(bag.id, bag.character_id)
    }

    return (
        <div>
            <br/>
           {props.bags && props.bags.map(bag =>
                <li key={bag.id}> Bag: {bag.title} <br/> 
                Description: "{bag.description}" <br/>
                <button onClick={() => handleDelete(bag)}> Delete Bag </button>
                </li>
            )}
        </div>
    )
}

export default connect(null, {deleteBag})(Bags)