


export default function characterReducer(state = {characters: []}, action) {

    switch (action.type) {
        case 'FETCH_CHARACTERS':
            return {characters: action.payload}
        case 'ADD_CHARACTER':
            return {...state, characters: [...state.characters, action.payload]}
        default:
            return state
    }
}