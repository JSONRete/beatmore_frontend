  export default function beatsReducer(state = {beats: [], loading: false}, action){
    switch(action.type){
        case "LOADING":
          return { ...state, loading: true };
        case 'FETCH_BEATS':
          console.log("LOG: E")
            return {...state, loading: false, beats: action.payload}
            // return {...state, beats: action.payload, loading: false}
        case 'ADDED_BEAT':
            return {...state, beats: [...state.beats, action.payload]}
        default:
            return state
    }
  }  

