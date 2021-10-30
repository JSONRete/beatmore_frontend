import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBeat  } from '../actions/beatActions';
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
        this.props.addBeat(this.state)
    }


    render() {
        return (
            <form onSubmit={this.submitForm}>
                <label>Artist:</label>
                <input type='text' value={this.state.artist} onChange={this.textUpdating} name='artist'/>
                < br />
                <label>Song:</label>
                <input type='text' value={this.state.song} onChange={this.textUpdating} name='song'/>
                < br />
                <label>Producer:</label>
                <input type='text' value={this.state.producer} onChange={this.textUpdating} name='producer'/>
                < br />
                <label>Media:</label>
                <input type='text' value={this.state.media} onChange={this.textUpdating} name='media'/>
                <input type='submit' value='Create Beat' />
            </form>
        );
    }
}

export default connect(null, { addBeat })(Beatsform);