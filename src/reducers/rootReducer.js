import { combineReducers } from 'redux'

import { beatsReducer } from './beatsReducer'
import { producersReducer } from './producersReducer'

export const rootReducer = combineReducers ({
    producers: producersReducer,
    beats: beatsReducer
})