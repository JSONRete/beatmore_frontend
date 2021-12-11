import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProducerCard from './ProducerCard'

class ProducersList extends Component {





    render() {
        return (
            <div>
                <ProducerCard />
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("test", state)
    return {
        artists: state.producersReducer.artists,
        // loading: state.loading
}

}

export default connect(mapStateToProps)(ProducersList);


