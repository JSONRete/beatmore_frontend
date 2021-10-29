export const fetchBeats = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/beats')
        .then(res => res.json())
        .then(beats => console.log('fetchBeats', beats))
    }
}