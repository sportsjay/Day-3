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

export default class Todo extends React.Component {
    state = {
        backgroundColor: "#fbf8cd",
        list: [],
    }
  
    setBackgroundColor = (color) => {
        this.setState({backgroundColor: color})
    }
  render(){

    
    return (
        <div style={{height:"100%"}}>
        <TopAppBar className={useStyles.appBar} position="relative"/>
        <div className={useStyles.root} style={{ backgroundColor: this.state.backgroundColor, padding:  20}}>
            <BodyContent 
            content={<Content />} 
            todoList={
                <TodoList 
                listOfTodos={this.state.list}
                addNewList={(newText) => {
                    this.state.list.push(newText)
                    this.setState({list: this.state.list});
                }}
                />
            } 
        
            
            />
            <Container>
            <Card style={useStyles.themeSelectColor}>
                    {/* <div style={{flex: 5, justifyContent: "space-between"}}> */}
                        <Typography style={{ margin: "auto", marginLeft: 10 }}>
                        Change the background color:
                        </Typography>
                    {/* </div> */}
                    {/* <div style={{flex: 2, justifyContent: "space-between"}}> */}
                    <div>
                    <Button
                        className={useStyles.SelectColorButton}
                        onClick={() => this.setBackgroundColor("#f2dede")}
                        disabled={this.state.backgroundColor === "#f2dede" ? true : false}
                    >
                        pink
                    </Button>
                    <Button
                        className={useStyles.SelectColorButton}
                        onClick={() => this.setBackgroundColor("#004987")}
                        disabled={this.state.backgroundColor === "#004987" ? true : false}
                    >
                        blue
                    </Button>
                    <Button
                        className={useStyles.SelectColorButton}
                        onClick={() => this.setBackgroundColor("#fbf8cd")}
                        disabled={this.state.backgroundColor === "#fbf8cd" ? true : false}
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
}
