import React, { Fragment } from "react";

import { AppBar, Container, Toolbar, Box, makeStyles } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#004987",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
  },
  profileBox: {
    display: "flex",
    justifyContent: "space-around",
    padding: "auto",
    [theme.breakpoints.up("md")]: {
      width: "300px",
      minWidth: "200px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "100px",
    },
  },
  main: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  todo: {
    margin: 20,
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "100px",
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: "60%",
      padding: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      minWidth: "200px",
      padding: "auto",
    },
  },
}));

export const BodyContent = (props) => {
  const classes = useStyles();

  const elements = {
    todo: Array(props.todoList),
    content: Array(props.content),
  };

  return (
      <div className={classes.main}>
        <Container className={classes.todo}>
          {elements["todo"].map((components) => (
            <Fragment key={Math.random() * 100}>{components}</Fragment>
          ))}
        </Container>
        <Container className={classes.content}>
          {elements["content"].map((components) => (
            <Fragment key={Math.random() * 100}>{components}</Fragment>
          ))}
        </Container>
      </div>
  );
};
