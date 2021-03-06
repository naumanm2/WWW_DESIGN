import React, {useState} from 'react'

import { connect } from 'react-redux'

import { setUser } from '../../reducers/userReducer'

/*--

Component allows hyphotethical user to login. No validation of credentials
has been implemented since we did not consider this relevant to our application.

Gets information from redux store containing current user. Can also set new user.
 --*/

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()
    try {
      props.setUser({username, password})
    } catch (e) {
      console.log(e)
    }
  }
  
  return (
    <div>
      <form onSubmit = {handleLogin}>
        <div>
          username
          <input
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            id="password"
            value={password}
            type="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  setUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)
