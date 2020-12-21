import React, { Fragment, useState } from "react";

import {
  Box,
  Container,
  TextField,
  FormControlLabel,
  Checkbox,
  IconButton,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#004987",
    backgroundColor: "white",
    borderRadius: 10,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    color: "#004987",
    marginTop: 20,
  },
  divider: {
    backgroundColor: "#004987",
  },
  input: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  },
}));

const NewList = (props) => {
  const text = props.text;

  const classes = useStyles();

  return (
    <Box className={classes.listItem}>
      <FormControlLabel control={<Checkbox color="primary" />} />
      <Typography className={classes.listText}>{text}</Typography>
    </Box>
  );
};

export default function TodoList(props) {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <h2>What are you doing today?</h2>
      {props.listOfTodos.map((item) => (
        <Fragment>
          <NewList key={Math.random() * 1000} text={item} />
          <Divider className={classes.divider} />
        </Fragment>
      ))}
      <Box className={classes.input}>
        <div>
          <FormControlLabel control={<Checkbox />} />
          <TextField
            variant="outlined"
            label={"Add a new list!"}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <IconButton
          onClick={() => {
            if (text.length > 0) {
              props.addNewList(text);
              //setText("");
            } else {
              alert("What are you going to do today?");
            }
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Divider className={classes.divider} />
    </Container>
  );
}
