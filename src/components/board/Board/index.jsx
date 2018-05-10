import React from 'react'

const Board = ({ data }) => (
    <table>
        <tbody>
        {[...Array(data.height)].map((_, y) => (
            <tr key={y}>
            {[...Array(data.width)].map((_, x) => (
                <Cell alive={data.get(x, y)} key={x} />
            ))}
            </tr>
        ))}
        </tbody>
    </table>
)

const Cell = ({ alive }) => {
    return <td className="alive">{alive}</td>
}

export default Board
