//import * as React from "react";
import React, { useState, useRef } from "react";

import "../css/Table.css";
import Row from "../components/Row";
import {
  Button,
  Grid,
  Paper,
  styled,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
//import { Container, Row, Col, Card } from "react-bootstrap";
//import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";

function Table() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const [buttonText, setButtonText] = useState("Done");
  var array = [0];
  const [disable, setDisable] = useState(false);
  const [courses, setCourses] = useState([1]);
  const [rows, setRows] = useState([1]);
  const [id, setId] = useState(1);

  function disableButtons() {
    setDisable(!disable);
    if (!disable) setButtonText("Edit");
    else setButtonText("Done");
  }

  const [alignment, setAlignment] = React.useState("wwww");
  const valueRef = useRef("");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const decrease = (action) => {
    if (courses.length > 1) {
      setCourses([...courses.slice(1)]);
    } else {
      console.log("Nothing to delete");
    }
    console.log(courses);
    console.log(courses.length);

    /* 
    setCourses(courses);
 */
  };
  const increase = (action) => {
    if (courses.length + 1 <= 6) {
      setCourses((courses) => [...courses, courses.length]);
      setId(id);
    } else {
      console.log("NO MORE");
    }

    console.log("rows: " + rows);
    console.log(courses.length);
  };

  return (
    <div className="Table">
      <Button onClick={decrease}>-</Button>

      <Button onClick={increase}>+</Button>
      <br />
      <br />

        {rows.map((name, id) => {
          return (
            <div>
              <Row />
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
              >
              {courses.map((name, id) => {
                return (
                  <div>
                    <ToggleButton value={courses + "" + id}>
                      <TextField
                        disabled={disable}
                        id="filled-basic"
                        label={"Course " + (id + 1)}
                        variant="filled"
                      />{" "}
                    </ToggleButton>
                  </div>
                );
              })}
              </ToggleButtonGroup>
              
            </div>
          );
        })}
      <br />
      {/*       <TextField
        inputRef={valueRef}
        disabled={disable}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
      /> */}
      <br />

      <Button onClick={disableButtons}>{buttonText}</Button>
      <br />
      <Button onClick={() => setRows([1,1])}>ADD SEMESTER</Button>
    </div>
  );
}

export default Table;
