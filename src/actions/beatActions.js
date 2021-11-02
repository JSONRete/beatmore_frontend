const url = 'http://127.0.0.1:3000/beats'

export const loadBeats = (beats) => ({type: 'FETCH_BEATS', payload: beats})
export const addBeat = (beat) => ({type: 'ADDED_BEAT', payload: beat})

export const fetchBeats = () => {
    console.log("LOG: B")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch(loadBeats(json))
    console.log("LOG: F")
    })
    console.log("LOG: C")
    }
}

export const createBeat = beat => {
    return (dispatch) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(beat),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(beat => dispatch({type: 'ADDED_BEAT', payload: beat}))
    }
}


