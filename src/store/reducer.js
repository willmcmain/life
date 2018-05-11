import { board } from './board/reducers'
import { combineReducers } from 'redux'

const reducer = combineReducers({
    board
})

export default reducer
