export const producersReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_PRODUCER':
            return action.payload
        default:
            return state
    }

  }  