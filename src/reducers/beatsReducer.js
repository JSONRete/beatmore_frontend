  export default function beatsReducer(state = {beats: []}, action){
    switch(action.type){
        case 'FETCH_BEATS':
            return {...state, beats: action.payload}
        case 'ADD_BEAT':
            return {...state, beats: [...state.beats, action.payload]}
        default:
            return state
    }
  }  