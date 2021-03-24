export function fetchCharacters() {
    return (dispatch) => {
      console.log("c")
        fetch('http://localhost:3000/api/v1/characters')
        .then(resp => resp.json())
        .then(characters => { 
          console.log("d")
          dispatch({
          type: 'FETCH_CHARACTERS', 
          payload: characters 
        })})
    }
}

