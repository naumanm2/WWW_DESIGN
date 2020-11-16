import React, { useState } from 'react';
import clsx from 'clsx';

import { useStyles } from './Drawer.styles'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { connect } from 'react-redux'

import { toggleDrawer } from '../../reducers/menuReducer'

import { Link } from 'react-router-dom'

const TemporaryDrawer = ({state, toggleDrawer}) => {

  console.log(state)
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault()
    try {
      toggleDrawer(false)
    } catch (e) {
      console.log(e)
    }
  }


  const list = (anchor) => (
    <div
      role="presentation"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      <List>
        <ListItem button component={Link} to='/'>
          <ListItemIcon> <SupervisorAccountIcon /> </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} to='/admin'>
          <ListItemIcon> <VpnKeyIcon /> </ListItemIcon>
          <ListItemText primary="Log in" />
        </ListItem>
        <ListItem button component={Link} to='/aboutus'>
          <ListItemIcon> <InfoIcon /> </ListItemIcon>
          <ListItemText primary="About us" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
        <Drawer open={state} onClose={handleClick}>
            {list()}
          </Drawer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state.menu
  }
}

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TemporaryDrawer)
