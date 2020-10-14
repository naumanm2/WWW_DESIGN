import React, {useState, useEffect} from 'react';

import Home from './pages/Home'
import Navbar from './components/navigation/Navbar'

import { connect } from 'react-redux'

import {Switch, Route} from 'react-router-dom'

import { toggleMenu } from './reducers/menuReducer'
import { initData } from './reducers/pinReducer'


const App = (props) => {

  useEffect(() => {
    props.initData()
  }, [])

  return (
    <div>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
      </Switch>

    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    isOpen: state.menu,
    pins: state.pins
  }
}


const mapDispatchToProps = {
  toggleMenu,
  initData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
