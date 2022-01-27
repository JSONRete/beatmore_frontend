import { combineReducers } from 'redux'
import beatsReducer from './beatsReducer'
import producersReducer from './producersReducer'

const rootReducer = combineReducers ({
    producersReducer: producersReducer,
    beatsReducer: beatsReducer,
})
export default rootReducer
