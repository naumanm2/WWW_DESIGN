import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import menuReducer from './reducers/menuReducer'
import pinReducer from './reducers/pinReducer'
import userReducer from './reducers/userReducer'
import infoReducer from './reducers/infoReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
  menu: menuReducer,
  pins: pinReducer,
  user: userReducer,
  info: infoReducer,
  filter: filterReducer
})

export default createStore(reducer, composeWithDevTools(
  applyMiddleware(thunk)
))
