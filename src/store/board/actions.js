import { SET_CELL } from 'store/actionTypes'

export function createSetCell(x, y) {
    return { type: SET_CELL, x, y }
}