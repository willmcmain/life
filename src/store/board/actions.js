import { SET_CELL, STEP_SIMULATION } from 'store/actionTypes'

export function createSetCell(x, y) {
    return { type: SET_CELL, x, y }
}

export function createStepSimulation() {
    return { type: STEP_SIMULATION }
}
