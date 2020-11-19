import React from 'react'

import { connect } from 'react-redux'

import { nullUser } from '../../reducers/userReducer'

/*--
Component to log out user and update redux store with no user set.
Returns nothing if user is not logged in.

 --*/

const Logout = (props) => {

  const logout = (event) => {
    try {
      props.nullUser()
    } catch (e) {
      console.log(e)
    }
  }
    if (props.user) {
      return (
        <div>
          <button onClick={logout}>log out</button>
        </div>
      )
    }
    return (
      <div />
    )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  nullUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)
