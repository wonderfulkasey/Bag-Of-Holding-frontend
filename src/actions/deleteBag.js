export const deleteBag = (bagId, characterId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/characters/${characterId}/bags/${bagId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(character => dispatch({type: 'DELETE_BAG', payload: character}))
    }
}