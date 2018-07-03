import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { board } from './board/reducers'
import { simulation } from './simulation/reducers'

const reducer = combineReducers({
    board,
    simulation
})

const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        logger
    )
)

export default store
