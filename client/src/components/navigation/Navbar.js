import React from 'react';
import { Nav, NavContainer, NavBody, TopMenu, TopMenuItem, TopMenuLink } from './Navbar.styles'
import Menu from './Menu';
import Burger from './Burger';

import { connect } from 'react-redux'

import { toggleMenu } from '../../reducers/menuReducer'

const Navbar = ({open, toggleMenu, location}) => {

  return (
    <Nav>
      <NavContainer id="navigation">
        <TopMenu>
          <TopMenuItem>
            <TopMenuLink to='/' >Home</TopMenuLink>
          </TopMenuItem>
          <TopMenuItem>
            <TopMenuLink to='/experience' >experiences</TopMenuLink>
          </TopMenuItem>
          <TopMenuItem>
            <TopMenuLink to='/interests' >interests</TopMenuLink>
          </TopMenuItem>
          <TopMenuItem>
            <TopMenuLink to='/contact' >contact</TopMenuLink>
          </TopMenuItem>
        </TopMenu>
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
