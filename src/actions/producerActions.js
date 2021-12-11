const url = 'http://localhost:3000/producer_pull'

export const loadProducers = (artists) => ({type: 'FETCH_PRODUCERS', payload: artists})

export const fetchProducers = (name) => {

    // placeholder arg

    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url + `?name=${name}`)
        .then(response => response.json())
        .then(data => {
            dispatch(loadProducers(data.artists))
            console.log("see me", data)

    })
    }
}