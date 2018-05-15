import React from 'react'
import Board from 'components/board/Board'
import Array2d from 'array2d'

import { connect } from 'react-redux'
import { createStepSimulation } from 'store/board/actions'

const StepButtonBase = ({onClick}) => {
    return <button onClick={onClick}>Step</button>
}

const mapDispatchToProps = dispatch => {
    return {
        onClick: () => {
            dispatch(createStepSimulation())
        }
    }
}

const StepButton = connect(
    undefined,
    mapDispatchToProps
)(StepButtonBase)

const BoardPage = () => {
    let arr = new Array2d([
        [0, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 0]
    ])
    return (<div>
        Board Goes Here
        <Board data={arr} />
        <StepButton />
    </div>)
}

export default BoardPage
