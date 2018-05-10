import React from 'react'
import Board from 'components/board/Board'
import Array2d from 'array2d'

const BoardPage = () => {
    let arr = new Array2d([
        [0, 0, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 0]
    ])
    return (<div>
        Board Goes Here
        <Board data={arr} />
    </div>)
}

export default BoardPage
