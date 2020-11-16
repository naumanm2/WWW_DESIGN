import React, {useEffect} from 'react';

import Home from './pages/Home'
import Admin from './pages/Admin'

import GlobalStyle from './styles'

import { connect } from 'react-redux'

import { Switch, Route, Link } from 'react-router-dom'

import { initData } from './reducers/pinReducer'
import { initUser } from './reducers/userReducer'


const App = (props) => {

  useEffect(() => {
    props.initData()
  }, [])

  return (
    <div>
    <GlobalStyle open={props.isOpen} />
        <Switch>
          <Route path='/' exact component={Home} />
      </Switch>
      <Switch>
        <Route path='/admin' exact component={Admin} />
      </Switch>
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    isOpen: state.menu,
    pins: state.pins,
    user: state.user
  }
}


const mapDispatchToProps = {
  initData,
  initUser
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
