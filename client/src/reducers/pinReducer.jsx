//Sets initial pins. Fetches data from mongoose. Creates pins and updates state.
//Creating a pin also updates database accordinly.

import pinService from '../services/pins'

export const initData = () => {
  return async dispatch => {
    const pins = await pinService.getAll().then(pins => pins)
    dispatch({
      type: 'INIT_PINS',
      data: pins
    })
  }
}

export const createPin = (pin) => {
  return async dispatch => {
    const result = await pinService.createPin(pin).then(pins => pins)
    console.log(result)
    dispatch({
      type: 'NEW_PIN',
      data: result
    })
  }
}

const pinReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_PINS':
      return action.data
    case 'NEW_PIN':
      return [...state, action.data]
    default:
      return state
  }
}

export default pinReducer
