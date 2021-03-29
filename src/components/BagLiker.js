import React, { useState } from 'react';
import {connect} from 'react-redux'

function BagLiker() {
    function clickLike(e) {
        console.log('clicked link');
        setLike(likes +1)
    }

    console.log(useState("hello"))

    const [likes, setLike] = useState(0);

    return (
        <button onClick={clickLike}>
            Like This Bag! {likes}
        </button>
    )
}

export default BagLiker