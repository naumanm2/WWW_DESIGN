import React from 'react';
import { useStyles } from './GalleryInfo.styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { connect } from 'react-redux'



import { nullInfo } from '../../reducers/infoReducer'


const GalleryInfo = (props) => {
  const classes = useStyles();

  const handleClick = (event) => {
    event.preventDefault()
    try {
      props.nullInfo()
    } catch (e) {
      console.log(e)
    }
  }
console.log(props)
  if (!props.info || !props.show || props.show !== props.info.name) {
    return null
  }

  return (
  <ClickAwayListener onClickAway={handleClick}>
    <Grow in={props.show}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>xs=12</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
      </Grid>
    </div>
    </Grow>
    </ClickAwayListener>
  );
}


const mapStateToProps = (state) => {
  return {info: state.info}
}
const mapDispatchToProps = {
  nullInfo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryInfo)
