import "./App.css";
import Table from "./components/Table";
import * as React from "react";


import { Button, Select, MenuItem, InputLabel } from "@mui/material";
function App() {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="App">
      <h2>Courses Manager</h2>
      <div>
        <div className="sign">
          <Button>Sign-in</Button>
        </div>

        <h4>Start by selecting the major</h4>
      </div>

      <InputLabel id="demo-simple-select-label">Departement</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Engineering</MenuItem>
        <MenuItem value={20}>Science</MenuItem>
        <MenuItem value={30}>Medical</MenuItem>
      </Select>

      <Table />
    </div>
  );
}

export default App;
