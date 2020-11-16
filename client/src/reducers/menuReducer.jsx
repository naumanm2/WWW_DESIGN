export const toggleDrawer = (data) => {
  return async dispatch => {
    dispatch({
      type: 'TOGGLE_MENU',
      data
    })
  }
}

const menuReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return action.data
    default:
      return state
  }

}

export default menuReducer
