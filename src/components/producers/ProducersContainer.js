import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducers} from '../../actions/producerActions'
import ProducersList from './ProducersList'



class ProducersContainer extends Component {


    componentDidMount() {
        this.props.fetchProducers()
    }


    render() {
        return (
            <div>
                <ProducersList />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBeats: () => dispatch(fetchProducers())
    }
}

export default connect(null, mapDispatchToProps)(ProducersContainer);