import React from 'react'

const Bags = (props) => {
    return (
        <div>
            <br/>
           {props.bags && props.bags.map(bag =>
                <li key={bag.id}> Bag: {bag.title} <br/> 
                Description: "{bag.description}" </li>
            )}
        </div>
    )
}

export default Bags