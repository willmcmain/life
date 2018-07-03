import {
    HALT_SIMULATION,
    RUN_SIMULATION,
    SET_LAST_STEP
} from 'store/actionTypes'


export function simulation(
    state = {
        isRunning: false,
        lastStep: 0,
        stepTime: 50,
    },
    action) {
    switch(action.type) {
    case HALT_SIMULATION:
        return {
            ...state,
            isRunning: false
        }

    case RUN_SIMULATION:
        return {
            ...state,
            isRunning: true
        }

    case SET_LAST_STEP:
        return {
            ...state,
            lastStep: action.timestamp
        }

    default:
        return state
    }
}