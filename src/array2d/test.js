import Array2d from '.'
import _ from 'lodash'


test('Create 2D Array from list of lists', () => {
    let lists = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [9, 0, 1]]
    let arr = new Array2d(lists)
    expect(arr.width).toBe(3)
    expect(arr.height).toBe(4)
})


test('Create empty 2D Array', () => {
    let arr = new Array2d([
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]])
    let empty = Array2d.empty(4, 3, 0)
    expect(_.isEqual(empty, arr)).toBe(true)
})


test('Arrays with same values are equal', () => {
    let arr1 = new Array2d([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ])
    let arr2 = new Array2d([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ])
    let arr3 = new Array2d([
        [1, 2, 3],
        [3, 4, 5],
        [6, 7, 8]
    ])
    expect(_.isEqual(arr1, arr2)).toBe(true)
    expect(_.isEqual(arr2, arr3)).toBe(false)
})


test('Array rows must not be jagged', () => {
    let lists = [
        [0, 1, 2],
        [3, 4],
        [6, 7, 8]]
    let jaggedArray = () => {
        return new Array2d(lists)
    }
    expect(jaggedArray).toThrow(RangeError)
})


test('Get array values', () => {
    let lists = [
        [0,  1,  2],
        [3,  4,  5],
        [6,  7,  8],
        [9, 10, 11]]
    let arr = new Array2d(lists)
    expect(arr.get(0,0)).toEqual(0)
    expect(arr.get(1,2)).toEqual(7)
    expect(arr.get(2,3)).toEqual(11)
})


test('Get out of range array values', () => {
    let arr1 = new Array2d([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ])

    expect(() => arr1.get(3, 0)).toThrow(RangeError)
    expect(() => arr1.get(0, 3)).toThrow(RangeError)
})


test('Set array values', () => {
    let lists = [
        [0,  1,  2],
        [3,  4,  5],
        [6,  7,  8],
        [9, 10, 11]]
    let arr = new Array2d(lists)
    expect(arr.get(0,3)).toEqual(9)
    arr.set(15, 0, 3)
    expect(arr.get(0,3)).toEqual(15)
})
