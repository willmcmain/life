import Array2d from 'array2d'

const update = function(board) {
    let result = Array2d.empty(board.width, board.height, null)
    for (let i=0; i<board.width; i++) {
        for (let j=0; j<board.height; j++) {
            let neighbors = countNeighbors(board, i, j)
            if (board.get(i,j) == 1) {
                if (neighbors < 2) {
                    result.set(0, i, j)
                }
                else if (neighbors == 2 || neighbors == 3) {
                    result.set(1, i, j)
                }
                else if (neighbors > 3) {
                    result.set(0, i, j)
                }
            }
            else {
                if (neighbors == 3) {
                    result.set(1, i, j)
                }
                else {
                    result.set(0, i, j)
                }
            }
        }
    }
    return result
}

const countNeighbors = function(board, x, y) {
    let count = 0
    for (let i of [-1, 0, 1]) {
        for (let j of [-1, 0, 1]) {
            if (i == 0 && j == 0) {
                continue
            }
            else if (x+i < 0 || x+i >= board.width) {
                continue
            }
            else if (y+j < 0 || y+j >= board.height) {
                continue
            }
            else if (board.get(x+i, y+j)) {
                count++
            }
        }
    }
    return count
}

export default update
