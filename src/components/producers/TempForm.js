import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducers } from '../../actions/producerActions';
import "../../css/beats/beatform.css"

class TempForm extends Component {

    state = {
        name: ''
    }

    handleOnChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchProducers(this.state.name)
        this.setState({
            name: '',
        
        })
        // this.props.history.push("/beats");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label className='artist-card'>Name</label>
            <input type='text' value={this.state.name} onChange={this.handleOnChange} name='name' placeholder='enter producer name' />
            <input type='submit' className='submitButton' value='Search Producer' />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProducers: (name) => dispatch(fetchProducers(name))
    }
}

export default connect(null, mapDispatchToProps)(TempForm);

