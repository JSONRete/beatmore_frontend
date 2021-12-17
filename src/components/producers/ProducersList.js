import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProducerCard from './ProducerCard'

class ProducersList extends Component {

makeProducers = () => {
    console.log("makeProducers()", this.props.artists)
    return this.props.artists.map(producer => <ProducerCard key={producer.id} producer={producer} />)
    
}
    render() {
        return (
        <div>
            {this.makeProducers()}
        </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("from ProducersList.js", state)
    return {
        artists: state.producersReducer.artists,
        // loading: state.loading
}

}

export default connect(mapStateToProps)(ProducersList);