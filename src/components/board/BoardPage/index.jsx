import React from 'react'
import Board from 'components/board/Board'
import Array2d from 'array2d'

import { connect } from 'react-redux'
import { stepSimulation } from 'store/board/actions'
import {
    haltSimulation,
    startSimulation 
} from 'store/simulation/actions'

const StepButtonBase = ({onClick}) => {
    return <button onClick={onClick}>Step</button>
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(stepSimulation())
        }
    }
}

const StepButton = connect(
    undefined,
    mapDispatchToProps
)(StepButtonBase)


const RunButtonBase = ({onClick, isRunning}) => {
    return (
        <button onClick={() => onClick(isRunning)}>
            {isRunning ? 'Stop' : 'Run'}
        </button>
    )
}

const mapStateToProps = state => {
    return {
        isRunning: state.simulation.isRunning
    }
}

const mapDispatchToProps2 = dispatch => {
    return {
        onClick: (isRunning) => {
            if(isRunning) {
                dispatch(haltSimulation())
            }
            else {
                dispatch(startSimulation())
            }
        }
    }
}

const RunButton = connect(
    mapStateToProps,
    mapDispatchToProps2
)(RunButtonBase)

const BoardPage = () => {
    let arr = new Array2d([
        [0, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 0]
    ])
    return (<div>
        <Board data={arr} />
        <StepButton />
        <RunButton />
    </div>)
}

export default BoardPage
