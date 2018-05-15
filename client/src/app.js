import React from 'react';
import {
  ToolBar,
  AppBar,
  Drawer,
  IconButton,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { withStyles } from '@material-ui/core/styles';

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
};

const styles = theme => ({
  drawerStyle: {
    position: 'relative',
    width: 240,
  },
})

function AppBase (props) {
  const { classes } = props;

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <AppBar position="static">
        <div style={flexContainer}>
          <IconButton>
            <MenuIcon/>
          </IconButton>
          <p style={{ flex: 1 }}>domo test header</p>
          <IconButton>
            <AccountCircle/>
          </IconButton>
        </div>
      </AppBar>

      <Drawer variant="permanent" classes={{ paper: classes.drawerStyle }}>
        <MenuItem>Menu1</MenuItem>
        <MenuItem>Menu2</MenuItem>
        <MenuItem>Menu3</MenuItem>
      </Drawer>

      <div>
        <h1>domo from react</h1>
        <p>nakanaka react</p>
      </div>

    </div>
  );
}

export const App = withStyles(styles)(AppBase);
