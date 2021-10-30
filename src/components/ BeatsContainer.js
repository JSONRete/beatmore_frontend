import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBeats } from '../actions/beatActions'
import Beatsform from './BeatsForm'

class BeatsContainer extends Component {
 
    componentDidMount() {
        this.props.fetchBeats()
    }

    render() {
        return (
            <div>

                Beats Container
                <Beatsform />
                
            </div>
        )
    }
}

export default connect(null, { fetchBeats })(BeatsContainer)
