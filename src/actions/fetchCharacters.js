export function fetchCharacters() {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/characters')
        .then(resp => resp.json())
        .then(characters => { 
          dispatch({
          type: 'FETCH_CHARACTERS', 
          payload: characters 
        })})
    }
}

