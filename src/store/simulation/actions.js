import { 
    HALT_SIMULATION,
    RUN_SIMULATION,
    SET_LAST_STEP
} from 'store/actionTypes'

import { stepSimulation } from 'store/board/actions'

export function haltSimulation() {
    return { type: HALT_SIMULATION }
}

export function runSimulation() {
    return { type: RUN_SIMULATION }
}

export function setLastStep(timestamp) {
    return {
        type: SET_LAST_STEP,
        timestamp: timestamp
    }
}

export function startSimulation() {
    return (dispatch, getState) => {
        const simulationFrame = (timestamp) => {
            const state = getState()
            if(state.simulation.isRunning) {
                if(timestamp > state.simulation.lastStep + state.simulation.stepTime) {
                    dispatch(stepSimulation())
                    dispatch(setLastStep(timestamp))
                }
                requestAnimationFrame(simulationFrame)
            }
        }

        if(!getState().simulation.isRunning) {
            dispatch(runSimulation())
            requestAnimationFrame(simulationFrame)
        }
    }
}