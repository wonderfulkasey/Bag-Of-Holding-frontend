

export function fetchCharacters() {

    fetch('http://localhost:3000/api/v1/characters')
    .then(resp => resp.json())
    .then(data => console.log(data))


}

