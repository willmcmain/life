import {
    HALT_SIMULATION,
    RUN_SIMULATION
} from 'store/actionTypes'


export function simulation(
    state = {
        isRunning: false
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

    default:
        return state
    }
}