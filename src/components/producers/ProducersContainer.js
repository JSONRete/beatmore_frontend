import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducers} from '../../actions/producerActions'
import ProducersList from './ProducersList'



class ProducersContainer extends Component {

    componentDidMount() {
        this.props.fetchProducers("Kanye West")

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
        fetchProducers: (name) => dispatch(fetchProducers(name))
    }
}

export default connect(null, mapDispatchToProps)(ProducersContainer);