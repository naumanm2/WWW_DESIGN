import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

import { nullUser } from '../../reducers/userReducer'

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
