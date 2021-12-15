const url = 'http://localhost:3000/producer_pull'

export const loadProducers = (artists) => ({type: 'FETCH_PRODUCERS', payload: artists})

export const fetchProducers = (name) => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url + `?search=${name}`)
        .then(response => response.json())
        .then(data => {
            dispatch(loadProducers(data.artists))
            console.log("see me from producerAction", data)
            console.log("see me from producerAction", name)
    })
    }
}


  // placeholder arg