import React, {useState} from 'react'
import PropTypes from 'prop-types'

import NewPin from '../components/newPin/NewPin'
import Login from '../components/Login/Login'
import Logout from '../components/Logout/Logout'



import { connect } from 'react-redux'


const Admin = (props) => {
  if (!props.user) {
    return (
      <Login />
    )
  }
  return (
    <>
    <NewPin />
    <Logout />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(Admin)
