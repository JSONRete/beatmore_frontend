import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchProducers } from '../../actions/producerActions';
import "../../css/beats/beatform.css"

class ProducersForm extends Component {

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
        this.props.searchProducers(this.state.name)
        this.setState({
            name: '',
        
        })
        // this.props.history.push("/producers");
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <label className='producer-form'>Producer Lookup</label>
                <input type='text' value={this.state.name} onChange={this.handleOnChange} name='name' placeholder='enter producer name' />
                <input type='submit' className='submit-button' value='Search Producer' />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        searchProducers: (name) => dispatch(searchProducers(name))
    }
}

export default connect(null, mapDispatchToProps)(ProducersForm);

