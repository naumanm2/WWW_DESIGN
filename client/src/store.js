import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import menuReducer from './reducers/menuReducer'
import pinReducer from './reducers/pinReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  menu: menuReducer,
  pins: pinReducer,
  user: userReducer,
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))
