import Array2d from 'array2d'
import React from 'react'
import { connect } from 'react-redux'
import { createSetCell } from 'store/board/actions'

const BoardBase = ({ board, setCell }) => (
    <table>
        <tbody>
        {[...Array(board.height)].map((_, y) => (
            <tr key={y}>
            {[...Array(board.width)].map((_, x) => (
                <Cell
                    alive={board.get(x, y)}
                    onClick={() => setCell(x,y)}
                    key={x} />
            ))}
            </tr>
        ))}
        </tbody>
    </table>
)

const mapStateToProps = state => {
    return {
        board: new Array2d(state.board)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCell: (x, y) => {
            dispatch(createSetCell(x, y))
        }
    }
}

const Board = connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardBase)


const Cell = ({ alive, onClick }) => {
    return <td className="alive" onClick={onClick}>{alive}</td>
}

export default Board
