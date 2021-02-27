export const addBag = (bag, characterId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/characters/${characterId}/bags`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bag)
        })
        .then(response => response.json())
        .then(character => dispatch({type: 'ADD_BAG', payload: character}
        ))
    }

}