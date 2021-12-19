import React, { Component } from 'react';
import { connect } from 'react-redux'
import { searchProducers } from '../../actions/producerActions'
import { fetchProducers } from '../../actions/producerActions';
import ProducersList from './ProducersList'
import ProducersForm from './ProducersForm';



class ProducersContainer extends Component {

    componentDidMount() {
        this.props.fetchProducers()
        // this.props.searchProducers("Kanye West")
        this.props.searchProducers()
    }

    componentDidUpdate(name) {
        // this.props.fetchProducers()
        // this.props.searchProducers("Kanye West")
        this.props.searchProducers(name)
        this.props.history.push("/producers");
    }

    render() {
        return (
            <div>
                <ProducersList />
                <ProducersForm />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducers: (name) => dispatch(searchProducers(name)),
        fetchProducers: () => dispatch(fetchProducers())
    }
}

export default connect(null, mapDispatchToProps)(ProducersContainer);

// render() {
//     return (
//         <div>
//             <ProducersList />
//             <TempForm />
//         </div>
//     );
// }