  export const beatsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_BEATS':
            return action.payload
        case 'ADD_BEAT':
            return [...state, action.payload]
        default:
            return state
    }

  }  