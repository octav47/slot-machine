import { getRandomInt } from './customUtils'

const getInitialWheels = (wheelsCount, iconCount = 4) => {
    const positions = []
    let availableIndexes = []

    for (let i = 0; i < iconCount; i++) {
        availableIndexes.push(i)
    }

    for (let i = 0; i < wheelsCount; i++) {
        const randomNumber = availableIndexes[getRandomInt(0, availableIndexes.length - 1)]

        positions.push(randomNumber)

        availableIndexes = availableIndexes.filter(index => index !== randomNumber)
    }

    return positions
}

const getRandomWheels = (wheelsCount, iconCount = 4) => {
    const positions = []

    for (let i = 0; i < wheelsCount; i++) {
        const randomNumber = getRandomInt(0, iconCount - 1)

        positions.push(randomNumber)
    }

    return positions
}

const getAmount = (positions, prevValue = 0) => {
    const isSameIcon = positions.every((icon, _, [first]) => icon === first)

    if (isSameIcon) {
        return prevValue + 100
    }

    let isConsecutive = false
    let [prevIcon] = positions

    for (let i = 1; i < positions.length; i++) {
        if (positions[i] === prevIcon) {
            isConsecutive = true
            break
        }

        prevIcon = positions[i]
    }

    if (isConsecutive) {
        return prevValue + 20
    }

    const isNonConsecutive = positions[0] === positions[2]

    if (isNonConsecutive) {
        return prevValue + 10
    }

    return prevValue
}

export {
    getInitialWheels,
    getRandomWheels,
    getAmount,
}
