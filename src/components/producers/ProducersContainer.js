import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchProducers} from '../../actions/producerActions'
import ProducerCard from './ProducerCard';
import ProducersList from './ProducersList'
import TempForm from './TempForm';



class ProducersContainer extends Component {

    componentDidMount() {
        this.props.fetchProducers("Kanye West")

    }

    render() {
        return (
            <div>
                
                <TempForm />
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

// render() {
//     return (
//         <div>
//             <ProducersList />
//             <TempForm />
//         </div>
//     );
// }