import React, { useState } from "react";
import {
  Card,
  Box,
  Typography,
  makeStyles,
  TextField,
  Button,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content1: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  card1: {
    textAlign: "center",
    color: "#004987",
    margin: 20,
    [theme.breakpoints.up("md")]: {
      minWidth: "300px",
      width: "50%",
      height: "60vh",
    },
  },
  card2: {
    margin: 20,
    color: "#004987",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      minWidth: "300px",
      width: "50%",
      height: "60vh",
    },
  },

  progressBarOuter: {
    borderRadius: 3,
    border: "1px solid black",
    margin: "auto",
    marginBottom: "20px",
    height: "10px",
  },
  progressBarInner: {
    borderRight: "1px solid black",
    backgroundColor: "#fbf8cd",
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 20,
    textTransform: "capitalize",
    width: "100%",
    backgroundColor: "#004987",
    color: "white",
  },
  card3: {
    textAlign: "center",
  },
}));

const ProgressBar = (props) => {
  const percent = props.percent;
  const width = props.width;

  const classes = useStyles();
  return (
    <div
      className={classes.progressBarOuter}
      style={{
        width: width + "px",
      }}
    >
      <div
        className={classes.progressBarInner}
        style={{
          width: (width * percent) / 100 + "px",
          height: "10px",
        }}
      />
    </div>
  );
};

export default function Content() {
  const [percentage, setPercentage] = useState(0);
  const [happiness, setHappiness] = useState(0);

  const classes = useStyles();

  return (
    <Box className={classes.content1}>
      <Card className={classes.card1}>
        <Box style={{ height: "20vh" }} />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi saepe
          voluptates eos reiciendis earum consectetur animi molestias sit
          eveniet quae dolores dolor maxime eligendi, eum cum quam distinctio et
          beatae!
        </Typography>
        <h2>Quotes of the day</h2>
      </Card>
      <Card className={classes.card2}>
        <Container>
          <h2>Mood Tracker</h2>
        </Container>
        <Container>
          <Typography style={{ marginTop: "20px", marginBottom: "20px" }}>
            How do you feel today?
          </Typography>
          <TextField
            variant="outlined"
            label="1-100"
            type="number"
            style={{ width: "100% " }}
            onChange={(e) => setPercentage(e.target.value)}
          />
          <Button
            variant="outlined"
            className={classes.submitButton}
            onClick={() => {
              if (percentage > 0 && percentage <= 100) {
                setHappiness(percentage);
              } else {
                alert("Are you not happy today? :(");
              }
            }}
          >
            Submit
          </Button>
          <h3>Hope you are happy today!</h3>
          <ProgressBar width={300} percent={happiness} />
          <h2>{happiness}%</h2>
        </Container>
      </Card>
    </Box>
  );
}
