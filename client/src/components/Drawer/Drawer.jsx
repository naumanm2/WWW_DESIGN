import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import { connect } from 'react-redux'

import { toggleDrawer } from '../../reducers/menuReducer'

import { Link } from 'react-router-dom'

const TemporaryDrawer = ({state, toggleDrawer}) => {

  // helper function to close drawer

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
          <ListItemText primary="Add museum" />
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
