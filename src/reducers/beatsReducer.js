const beatsReducer = (state = {beats: [], loading: false}, action) => {
  switch(action.type){
      case "LOADING":
        return { ...state, loading: true };
      case 'FETCH_BEATS':
        console.log("LOG: E")
          // return {...state, loading: false, beats: action.payload}
          return {...state, beats: action.payload, loading: false}
      case 'ADDED_BEAT':
          // return {...state, beats: [...state.beats, action.payload]}
          return {beats: [...state.beats, action.payload], ...state}
      case "DELETE_BEAT":
        return {...state, beats: state.beats.filter(beat => beat.id !== action.payload.id)}
    //   const filteredBeat = state.beats.filter(
    //   (beat) => beat.id !== action.payload.id
    // );
    // return { ...state, beat: filteredBeat};
      default:
          return state
  }
}  
export default beatsReducer