export const fetchBeats = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/beats')
        .then(res => res.json())
        .then(beats => dispatch({type: 'FETCH_BEATS', payload: beats}))
    }
}

export const addBeat = beat => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/beats', {
            method: 'POST',
            body: JSON.stringify(beat),
            headers: { 'Content-Type': 'application/json' }
    
        })
        .then(res => res.json())
        .then(beat => dispatch({type: 'ADD_BEAT', payload: beat}))
    }
}


 