const producersReducer = (state = {artists: [], loading: false}, action) => {
    switch(action.type){
        case  "LOADING":
            return { ...state, loading: true };
        case 'FETCH_PRODUCERS':
            return {...state, artists: action.payload, loading: false}
        default:
            return state
    }
}
export default producersReducer