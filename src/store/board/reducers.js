import Array2d from 'array2d'
import update from 'life'
import { BOARD_WIDTH, BOARD_HEIGHT } from '../../constants'
import { 
    SET_CELL, 
    STEP_SIMULATION
} from 'store/actionTypes'


export function board(
    state = Array2d.empty(BOARD_WIDTH, BOARD_HEIGHT, 0).toList(),
    action) {
    let board = new Array2d(state)

    switch(action.type) {
    case SET_CELL:
        board.set(board.get(action.x, action.y)?0:1, action.x, action.y)
        return board.toList()

    case STEP_SIMULATION:
        let newBoard = update(board)
        return newBoard.toList()

    default:
        return state
    }
}
