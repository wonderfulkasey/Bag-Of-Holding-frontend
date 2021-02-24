


export default function characterReducer(state = {characters: []}, action) {

    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {characters: action.payload}
        default:
            return state
    }
}