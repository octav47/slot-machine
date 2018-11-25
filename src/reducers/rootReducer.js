import { combineReducers } from 'redux'
import wheelsReducer from 'Reducers/wheelsReducer'

const rootReducer = combineReducers({
    wheels: wheelsReducer,
})

export default rootReducer
