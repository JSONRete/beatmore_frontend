const producersReducer = (state = {artists: [], loading: false}, action) => {
    switch(action.type){
        case  "LOADING":
            return { ...state, loading: true };
        case 'FETCH_PRODUCERS':
            return action.payload
        default:
            return state
    }
}
export default producersReducer