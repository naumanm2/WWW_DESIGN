import React, {useEffect} from 'react';

import Home from './pages/Home'
import Admin from './pages/Admin'
import About from './pages/About'

import GlobalStyle from './styles'

import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'

import { initData } from './reducers/pinReducer'


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
        <Switch>
          <Route path='/about' exact component={About} />
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
  initData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
