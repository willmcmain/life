import Array2d from 'array2d'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../../constants'
import { SET_CELL } from 'store/actionTypes'


export function board(
    state = Array2d.empty(BOARD_WIDTH, BOARD_HEIGHT, 0).toList(),
    action) {
    switch(action.type) {
        case SET_CELL: 
            let board = new Array2d(state)
            board.set(!board.get(x,y), action.x, action.y)
            return board.toList()
        default:
            return state
    }
}