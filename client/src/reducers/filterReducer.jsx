export const setFilter = (data) => {
  return async dispatch => {
    dispatch({
      type: 'SET_FILTER',
      data
    })
  }
}

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.data
    default:
      return state
  }
}

export default filterReducer
