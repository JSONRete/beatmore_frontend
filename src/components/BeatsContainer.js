import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBeats } from '../actions/beatActions'

import BeatsList from './BeatsList'

class BeatsContainer extends Component {
    
    componentDidMount() {
        console.log("LOG: A")
        this.props.fetchBeats()
        console.log("LOG: D")
    }

    render() {
        return (
            <div>
                <BeatsList />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBeats: () => dispatch(fetchBeats())
    }
}

export default connect(null, mapDispatchToProps)(BeatsContainer)
// export default connect(null, { fetchBeats })(BeatsContainer)
