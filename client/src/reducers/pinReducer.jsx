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

const pinReducer = (state = [], action) => {
  switch(action.type) {
    case 'INIT_PINS':
      return action.data
    default:
      return state
  }
}

export default pinReducer
