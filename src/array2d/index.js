class Array2d {
    constructor(lists) {
        this.height = lists.length
        this.width = lists[0].length
        this._data = []
        for (let row of lists) {
            if (row.length !== this.width) {
                throw new RangeError('All rows must be same length!')
            }
            for (let val of row) {
                this._data.push(val)
            }
        }
    }

    static empty(width, height, val) {
        let list = []
        for (let j=0; j<height; j++) {
            let row = []
            for (let i=0; i<width; i++) {
                row.push(val)
            }
            list.push(row)
        }

        return new Array2d(list)
    }

    _index(x, y) {
        if (x < 0 || x >= this.width) {
            throw new RangeError('X Index is out of range!')
        }
        if (y < 0 || y >= this.height) {
            throw new RangeError('Y Index is out of range!')
        }
        return (y * this.width) + x
    }

    get(x, y) {
        let i = this._index(x, y)
        return this._data[i]
    }

    set(val, x, y) {
        let i = this._index(x, y)
        this._data[i] = val
    }

    toList() {
        let result = []
        for (let j=0; j<this.height; j++) {
            let row = []
            for (let i=0; i<this.width; i++) {
                row.push(this.get(i,j))
            }
            result.push(row)
        }
        return result
    }
}

export default Array2d
