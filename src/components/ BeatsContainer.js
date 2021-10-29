import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fetchBeats } from '../actions/beatActions'

class BeatsContainer extends Component {
    render() {
        return (
            <div>

                Beats Container
                
            </div>
        )
    }
}

export default connect(null, { fetchBeats })(BeatsContainer)
