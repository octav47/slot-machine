import { createActions } from 'redux-actions'

export const { resetWheels, spinWheelsStart, spinWheelsStop } = createActions({
    RESET_WHEELS: () => {},
    SPIN_WHEELS_START: () => {},
    SPIN_WHEELS_STOP: () => {},
})
