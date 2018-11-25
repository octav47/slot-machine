import {
    RESET_WHEELS,
    SPIN_WHEELS_START,
    SPIN_WHEELS_STOP,
} from 'Consts/wheelsConsts'
import { getInitialWheels, getRandomWheels, getAmount } from 'Utils/wheels'

const getInitialState = () => {
    return {
        isSpinning: false,
        positions: getInitialWheels(3),
        amount: 0,
    }
}

export default function wheelsReducer (state = getInitialState(), action) {
    const { type } = action

    if (type === RESET_WHEELS) {
        return {
            ...state,
            ...getInitialState(),
        }
    }

    if (type === SPIN_WHEELS_START) {
        return {
            ...state,
            isSpinning: true,
        }
    }

    if (type === SPIN_WHEELS_STOP) {
        const positions = getRandomWheels(3)

        return {
            ...state,
            isSpinning: false,
            positions,
            amount: getAmount(positions, state.amount),
        }
    }

    return state
}
