import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBeat  } from '../actions/beatActions';
class Beatsform extends Component {

    state = {
        artist: '',
        song: '',
        producer: '',
        media: ''
    }

    textUpdating = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    submitForm = event => {
        event.preventDefault()
        this.props.createBeat(this.state)
    }

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label className="beatForm">Artist:</label>
                <input type='text' value={this.state.artist} onChange={this.textUpdating} name='artist' placeholder="enter artist name" />
                < br />
                <label className="beatForm">Song:</label>
                <input type='text' value={this.state.song} onChange={this.textUpdating} name='song' placeholder="enter song name" />
                < br />
                <label className="beatForm">Producer:</label>
                <input type='text' value={this.state.producer} onChange={this.textUpdating} name='producer' placeholder="enter producer name" />
                < br />
                <label className="beatForm">Media Link:</label>
                <input type='text' value={this.state.media} onChange={this.textUpdating} name='media' placeholder="enter media link" />
                <input type='submit' value='Save Beat' />
            </form>
        );
    }
}

export default connect(null, { createBeat })(Beatsform);
