export const addBag = (bag, characterId) => {

    //dispatch is a function of the redux store
    //only way to trigger a state change
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/characters/${characterId}/bags`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bag)
        })
        .then(response => response.json())
       
        .then(character => {
            if (character.error) {
                alert(character.error)
            } else {
                dispatch({type: 'ADD_BAG', payload: character})
            }
        }) 
    }
}