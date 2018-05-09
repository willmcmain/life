import Array2d from 'array2d'
import update from '.'

test('live cell with <2 live neighbors dies', () => {
    let initial = new Array2d([
        [0, 0, 0],
        [0, 1, 1],
        [0, 0, 0]])
    let expected = new Array2d([
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]])
    let actual = update(initial)
    expect(actual).toEqual(expected)
})


test('live cell with 2 or 3 live neighbors lives', () => {
    let initial = new Array2d([
        [0, 0, 0],
        [0, 1, 1],
        [1, 0, 0]])
    let expected = new Array2d([
        [0, 0, 0],
        [0, 1, 0],
        [0, 1, 0]])
    let actual = update(initial)
    expect(actual).toEqual(expected)
})


test('live cell with > 3 live neighbors dies', () => {
    let initial = new Array2d([
        [0, 1, 1],
        [0, 1, 1],
        [1, 0, 0]])
    let expected = new Array2d([
        [0, 1, 1],
        [1, 0, 1],
        [0, 1, 0]])
    let actual = update(initial)
    expect(actual).toEqual(expected)
})


test('dead cell with =3 live neighbors becomes alive', () => {
    let initial = new Array2d([
        [0, 1, 1],
        [0, 0, 1],
        [0, 0, 0]])
    let expected = new Array2d([
        [0, 1, 1],
        [0, 1, 1],
        [0, 0, 0]])
    let actual = update(initial)
    expect(actual).toEqual(expected)
})


test('glider', () => {
    let initial = new Array2d([
        [0, 1, 0, 0],
        [0, 0, 1, 0],
        [1, 1, 1, 0],
        [0, 0, 0, 0]])
    let expected = new Array2d([
        [0, 0, 0, 0],
        [1, 0, 1, 0],
        [0, 1, 1, 0],
        [0, 1, 0, 0]])
    let actual = update(initial)
    expect(actual).toEqual(expected)
})
