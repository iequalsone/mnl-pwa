import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  MenuItem
} from '@material-ui/core';

import FlagImage from "../../images/flag-default.jpg";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "#ffffff",
    textTransform: "uppercase"
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <MenuItem tabIndex="0">
          <NavLink className={classes.menuButton} to="/">Events</NavLink>
        </MenuItem>
        <MenuItem tabIndex="1">
          <NavLink className={classes.menuButton} to="/news">News</NavLink>
        </MenuItem>
        <MenuItem tabIndex="2">
          <NavLink className={classes.menuButton} to="/opportunities">Opportunities</NavLink>
        </MenuItem>
      </div>
    );

    return (
      <div className={classes.root}>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <img
              style={{ marginBottom: "2em", maxWidth: 250 }}
              className="img-fluid"
              src={FlagImage}
              alt="MusicNL: Instrumental Connections"
            />
            {sideList}
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography style={{ textAlign: "center" }} variant="title" color="inherit" className={classes.grow}>
              MusicNL: Instrumental Connections
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);