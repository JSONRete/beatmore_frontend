import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBeat  } from '../../actions/beatActions';
import "../../css/beats/beatform.css"


class Beatsform extends Component {

    state = {
        artist: '',
        song: '',
        producer: '',
        media: ''
    }

    handleOnChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.createBeat(this.state)
        this.setState({
            artist: '',
            song: '',
            producer: '',
            media: ''
        })
        this.props.history.push("/beats");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label className="beatForm">Artist</label>
                <input type='text' value={this.state.artist} onChange={this.handleOnChange} name='artist' placeholder="enter artist name" />
                < br />
                <label className="beatForm">Song</label>
                <input type='text' value={this.state.song} onChange={this.handleOnChange} name='song' placeholder="enter song name" />
                < br />
                <label className="beatForm">Producer</label>
                <input type='text' value={this.state.producer} onChange={this.handleOnChange} name='producer' placeholder="enter producer name" />
                < br />
                <label className="beatForm">Media Link</label>
                <input type='text' value={this.state.media} onChange={this.handleOnChange} name='media' placeholder="enter media link" />
                <input type='submit' className='submitButton' value='Save Beat' />
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createBeat: () => dispatch(createBeat())
    }
}

export default connect(null, mapDispatchToProps)(Beatsform);
// export default connect(null, { createBeat })(Beatsform);


