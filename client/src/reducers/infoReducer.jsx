export const setInfo = (data) => {
  return async dispatch => {
    dispatch({
      type: 'SET_INFO',
      data
    })
  }
}

export const nullInfo = (data) => {
  return async dispatch => {
    dispatch({
      type: 'NULL_INFO'
    })
  }
}

const infoReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_INFO':
      return action.data
    case 'NULL_INFO':
      return null
    default:
      return state
  }
}

export default infoReducer
