const producersReducer = (state = {artists: [], loading: false}, action) => {
    switch(action.type){
        case  "LOADING":
            return { ...state, loading: true };
        case 'SEARCH_PRODUCERS':
            return {...state, artists: [...state.artists, action.payload], loading: false}
        case 'FETCH_PRODUCERS':
            return {...state, artists: action.payload, loading: false}
        default:
            return state
    }
}
export default producersReducer
// the reducer is what handles the state of my application