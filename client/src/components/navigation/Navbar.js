import React from 'react';
import { Nav, NavContainer, NavBody, TopMenu, TopMenuItem, TopMenuLink, TopMenuFilter } from './Navbar.styles'
import Menu from './Menu';
import Burger from './Burger';

import { connect } from 'react-redux'

import { toggleMenu } from '../../reducers/menuReducer'

const Navbar = ({open, toggleMenu, location}) => {

  const toggleFilter = (event) => {
    event.preventDefault()
    console.log('filter')
  }

  return (
    <Nav>
      <NavContainer id="navigation">
        <TopMenu>
          <TopMenuItem>
            <TopMenuLink to='/' >Home</TopMenuLink>
          </TopMenuItem>
          <TopMenuItem>
            <TopMenuLink to='/admin'>admin?</TopMenuLink>
          </TopMenuItem>
          <TopMenuItem>
            <TopMenuFilter onClick={toggleFilter}>admin?</TopMenuFilter>
          </TopMenuItem>
        </TopMenu>
        <Filter open={openFilter} />
        <Burger open={open} handleClick={() => toggleMenu(!open)}/>
        <Menu open={open} handleClick={() => toggleMenu(!open)}/>
      </NavContainer>
    </Nav>
  )
}


const mapStateToProps = (state) => {
  return {
    open: state.menu,
    location: state.location
  }
}

const mapDispatchToProps = {
  toggleMenu
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar)
