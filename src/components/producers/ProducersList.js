import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProducersList extends Component {



componentDidMount() {
    fetch('http://localhost:3000/producer_pull')
    .then(response => response.json())
    .then(data => console.log(data));
}



    render() {
        return (
            <div>
                <h1> Testing h1</h1>
                <h2> Testing h2</h2>
                <h3> Testing h3</h3>
                <h4> Testing h4</h4>
                <h5> Testing h5</h5>
                <h6> Testing h6</h6>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("test", this.state)
    return {
        artists: state.producersReducer.artists,
        // loading: state.loading
}

}

export default connect(mapStateToProps)(ProducersList);
