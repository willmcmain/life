import { 
    HALT_SIMULATION,
    RUN_SIMULATION,
} from 'store/actionTypes'

export function haltSimulation() {
    return { type: HALT_SIMULATION }
}

export function runSimulation() {
    return { type: RUN_SIMULATION }
}
