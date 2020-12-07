import React from "react";

import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  makeStyles,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  root: {},
  toolbar: {
    display: "flex",
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    justifyContent: "space-between",
  },
  profileBox: {
    display: "flex",
    justifyContent: "space-around",
    padding: "auto",
    width: "300px",
    minWidth: "200px",
  },
}));

export const TopAppBar = (props) => {
  const classes = useStyles();

  const elements = {
    'main': Array.isArray(props.todoList) ? props.todoList : [],
    'content': Array.isArray(props.content) ? props.todoList : [],
  }

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Box>
            <Typography>
              <h1>My Name</h1>
            </Typography>
          </Box>
          <Box className={classes.profileBox}>
            <Typography>
              <h1>Todo</h1>
            </Typography>
            <PersonIcon style={{ margin: "auto", width: 50, height: 50 }} />
          </Box>
        </Toolbar>
      </AppBar>
      <div>
        <Container></Container>
        <Container></Container>
      </div>
    </div>
  );
};
