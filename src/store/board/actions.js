import {
    CLEAR_BOARD,
    SET_CELL,
    STEP_SIMULATION
} from 'store/actionTypes'

export function clearBoard() {
    return { type: CLEAR_BOARD }
}

export function setCell(x, y) {
    return { type: SET_CELL, x, y }
}

export function stepSimulation() {
    return { type: STEP_SIMULATION }
}
