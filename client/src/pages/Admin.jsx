import React from 'react'

import NewPin from '../components/NewPin/NewPin'
import Login from '../components/Login/Login'
import Logout from '../components/Logout/Logout'


import Navbar from '../components/NavBar/Navbar'
import Drawer from '../components/Drawer/Drawer'



import { connect } from 'react-redux'


const Admin = (props) => {
  if (!props.user) {
    return (
      <>
      <Navbar />
      <Drawer />
      <Login />
      </>
    )
  }
  return (
    <>
    <Navbar />
    <Drawer />
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
