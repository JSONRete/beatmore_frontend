const beatsReducer = (state = {beats: [], loading: false}, action) => {
  switch(action.type){
      case "LOADING":
        return { ...state, loading: true };
      case 'FETCH_BEATS':
          return {...state, beats: action.payload, loading: false}
      case 'ADDED_BEAT':

          return {beats: [...state.beats, action.payload], ...state}
      case "DELETE_BEAT":
        return {...state, beats: state.beats.filter(beat => beat.id !== action.payload.id)}

      default:
          return state
  }
}  
export default beatsReducer