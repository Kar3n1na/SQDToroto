import React from "react";
import { makeStyles, Drawer } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  drawer: {
    widh: 240,
    flexShink: 0,
  },
  drawerPaper: {
    widh: 240,
  },
  toolbar: theme.mixins.toolbar,
}));

const Cajon = () => {
  const classes = styles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    ></Drawer>
  );
};

export default Cajon;
