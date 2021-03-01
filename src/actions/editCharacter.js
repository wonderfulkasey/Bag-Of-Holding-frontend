export const editCharacter = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/characters/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(character => dispatch({type: 'EDIT_CHARACTER', payload: character}))
    }
}