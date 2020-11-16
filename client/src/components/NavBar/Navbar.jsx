import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './NavBar.styles'

import { connect } from 'react-redux'

import { toggleDrawer } from '../../reducers/menuReducer'


const SearchAppBar = (props) => {
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault()
    try {
      props.toggleDrawer(true)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Filter…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}

              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    open: state.menu
  }
}

const mapDispatchToProps = {
  toggleDrawer
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchAppBar)
