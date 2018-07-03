import Array2d from 'array2d'
import React from 'react'
import { connect } from 'react-redux'
import { createSetCell } from 'store/board/actions'
import style from './style.css'

const BoardBase = ({ board, setCell }) => (
    <table>
        <tbody>
            {[...Array(board.height)].map((_, y) => (
                <tr key={y} className={style.row} >
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
    const cellStyle = alive ? style.alive : null
    return <td className={`${cellStyle} ${style.cell}`} onClick={onClick}></td>
}

export default Board
