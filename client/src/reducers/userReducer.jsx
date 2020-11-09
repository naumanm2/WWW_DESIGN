export const initUser = () => {
    return async dispatch => {
      const data = window.localStorage.getItem('loggedAppUser')
      if (data) {
        const user = JSON.parse(data)
        dispatch({
          type: 'INIT_USER',
          data: user
        })
      }
    }
}

export const setUser = ({username, password}) => {
  const user = { 'username': username, 'password': password }
  window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
  return async dispatch => {
    dispatch({
      type: 'SET_USER',
      data: {
        username: username,
        password: password
      }
    })
  }
}

export const nullUser = () => {
  window.localStorage.clear('loggedAppUser')
  return async dispatch => {
    dispatch({
      type: 'NULL_USER',
    })
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'INIT_USER':
      return action.data
    case 'SET_USER':
      return action.data
    case 'NULL_USER':
      return null
    default:
      return state
  }
}

export default userReducer
