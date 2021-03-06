import React, { useState } from "react";
import {
  Container,
  Card,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { TopAppBar } from "../components/appbar";
import { BodyContent } from "../components/body";

import Content from "../components/content";
import TodoList from "../components/todolist";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      height: "100vh",
    },
  },
  themeSelectColor: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    color: "#004987",
  },
  SelectColorButton: {
    color: "#004987",
  },
}));

export default function Todo() {
  const [backgroundColor, setBackgroundColor] = useState("#fbf8cd");
  const [todoList, setTodoList] = useState([]);

  const classes = useStyles();

  return (
    <div>
      <TopAppBar className={classes.appBar} position="relative"/>
      <div className={classes.root} style={{ backgroundColor: backgroundColor, padding:  20}}>
        <BodyContent 
          content={<Content />} 
          todoList={
            <TodoList 
              listOfTodos={todoList}
              addNewList={(newText) => {
                todoList.push(newText)
                setTodoList(todoList)
              }}
            />
          } 
       
        
        />
        <Container>
          <Card className={classes.themeSelectColor}>
            <Typography style={{ margin: "auto", marginLeft: 10 }}>
              Change the background color:
            </Typography>
            <div>
              <Button
                className={classes.SelectColorButton}
                onClick={() => setBackgroundColor("#f2dede")}
                disabled={backgroundColor === "#f2dede" ? true : false}
              >
                pink
              </Button>
              <Button
                className={classes.SelectColorButton}
                onClick={() => setBackgroundColor("#004987")}
                disabled={backgroundColor === "#004987" ? true : false}
              >
                blue
              </Button>
              <Button
                className={classes.SelectColorButton}
                onClick={() => setBackgroundColor("#fbf8cd")}
                disabled={backgroundColor === "#fbf8cd" ? true : false}
              >
                yellow
              </Button>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
