const url = 'http://localhost:3000'
// export const getProducers = (artists) => ({type: 'SEARCH_PRODUCERS', payload: artists})
export const loadProducers = (artists) => ({type: 'FETCH_PRODUCERS', payload: artists})
export const searchProducers = (name) => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url + `/producer_pull?search=${name}`)
        .then(response => response.json())
        .then(data => {
            dispatch({type: 'SEARCH_PRODUCERS', payload: data})
            // console.log("see me from producerAction, data", data)
    })
    }
}

export const fetchProducers = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})
        fetch(url + `/producers`)
        .then(response => response.json())
        .then(data => {
            dispatch(loadProducers(data.artists))
            // console.log("see me from producerAction, data", data)
    
    })
    }
}