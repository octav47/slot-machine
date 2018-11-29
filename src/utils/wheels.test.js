/* eslint-disable no-undef */

import {
    getInitialWheels,
    getAmount,
} from './wheels'

const checkCorrectnessInitialWheelsValues = (wheelsCount, iconsCount) => {
    const wheels = getInitialWheels(wheelsCount, iconsCount)
    const set = new Set()

    wheels.forEach(wheel => set.add(wheel))

    return set.size === wheels.length
}

test('getInitialWheels(3, 5) is correct', () => {
    expect(checkCorrectnessInitialWheelsValues(3, 5)).toBe(true)
})

test('getInitialWheels(5, 5) is correct', () => {
    expect(checkCorrectnessInitialWheelsValues(5, 5)).toBe(true)
})

test('getInitialWheels(10, 3) is correct', () => {
    expect(checkCorrectnessInitialWheelsValues(10, 3)).toBe(false)
})

test('getAmount([1, 2, 3], 10) is 10', () => {
    expect(getAmount([1, 2, 3], 10)).toBe(10)
})

test('getAmount([2, 2, 3], 20) is 40', () => {
    expect(getAmount([2, 2, 3], 20)).toBe(40)
})

test('getAmount([1, 2, 2], 20) is 40', () => {
    expect(getAmount([1, 2, 2], 20)).toBe(40)
})

test('getAmount([1, 2, 1], 30) is 40', () => {
    expect(getAmount([1, 2, 1], 30)).toBe(40)
})

test('getAmount([3, 3, 3], 50) is 150', () => {
    expect(getAmount([3, 3, 3], 50)).toBe(150)
})


