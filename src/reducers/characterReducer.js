export default function characterReducer(state = {characters: []}, action) {
//pass reducers to redux createstore function
//returns an object
//object goes to provider comp
//ensures react-redux connect is available to all comps

    switch (action.type) {
        
        case 'FETCH_CHARACTERS':
            return {characters: action.payload}

        case 'ADD_CHARACTER':
            return {...state, characters: [...state.characters, action.payload]}
        
        case 'ADD_BAG':
            let characters = state.characters.map(character => {
                if (character.id === action.payload.id) {
                    return action.payload
                } else {
                    return character
                }
            })
            return {...state, characters: characters}
        
        case 'DELETE_BAG':
            let charactersTwo = state.characters.map(character => {
                if (character.id === action.payload.id) {
                    return action.payload
                } else {
                    return character
                }
            })
            return {...state, characters: charactersTwo}
        
        case 'EDIT_CHARACTER':
            let charactersThree = state.characters.map(character => {
                if (character.id === action.payload.id) {
                    return action.payload
                } else {
                    return character
                }
            })
            return {...state, characters: charactersThree}

        default:
            return state
    }
}