import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBeats } from '../actions/beatActions'

import BeatsList from './BeatsList'

class BeatsContainer extends Component {
 
    componentDidMount() {
        this.props.fetchBeats()
    }

    render() {
        return (
            <div>

                Beats Container
                <BeatsList />
                
            </div>
        )
    }
}

export default connect(null, { fetchBeats })(BeatsContainer)
