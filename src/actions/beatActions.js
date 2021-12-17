const url = 'http://127.0.0.1:3000/beats'

export const loadBeats = (beats) => ({type: 'FETCH_BEATS', payload: beats})
export const addBeat = (beat) => ({type: 'ADDED_BEAT', payload: beat})
export const deleteBeat = (beatId) => ({type: "DELETE_BEAT", payload: beatId});

export const fetchBeats = () => {
    console.log("LOG: C")
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url)
        .then(res => res.json())
        .then(json => {
            dispatch(loadBeats(json))
    console.log("LOG: D")
    })
    console.log("LOG: C")
    }
}

export const createBeat = beat => {
    return (dispatch) => {
        const configObject = {
            method: 'POST',
            body: JSON.stringify(beat),
            headers: { 'Content-Type': 'application/json' }
        }
        fetch(url, configObject)
        .then(res => res.json())
        .then(json => {
            dispatch(addBeat(json))
        })
    }
}

export const removeBeat = (beatId) => {
    return (dispatch) => {
    fetch(url + "/" + beatId, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    })
        .then(res => {
        if (res.ok) {
            dispatch(deleteBeat(beatId));
        } else {
            window.alert("Delete Not Complete");
        }
        })
    };
};




