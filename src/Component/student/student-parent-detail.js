import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Paper } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import { Grid, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const StudentParentDetails = () => {
  const [ParentData, setParentData] = useState({
    fathername: "",
    mothername: "",
    Fatheremail: "",
    motheremail: "",
    fathercontact: "",
    mothercontact: "",
    fatheroccupation: "",
    motheroccupation: ""
  
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log("name", name);
    // console.log("value", value);
    setParentData({ ...ParentData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("ParentData", ParentData);
    alert("your data has been submitted");
  };

  const paperStyle = { padding: "30px 20px", width: "900px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const labelStyle = { marginTop: "10%" };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Student parents Information</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              <div className="col-md-4 mx-auto">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="fathername"
                      value={ParentData.fathername}
                      onChange={handleChange}
                      label="Father Name"
                      name="fathername"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="Fatheremail"
                      id="email"
                      value={ParentData.Fatheremail}
                      onChange={handleChange}
                      label="Father Email"
                      name="Fatheremail"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="number"
                      id="fathercontact"
                      value={ParentData.fathercontact}
                      onChange={handleChange}
                      label="Fathe Contact Number"
                      name="fathercontact"
                    />
                  </Grid>

                 

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="fatheroccupation"
                      label="Father Occupation"
                      value={ParentData.fatheroccupation}
                      onChange={handleChange}
                      name="fatheroccupation"
                    />
                  </Grid>

              

                 
                </Grid>
              </div>
              <div className="col-md-4 mx-auto">

                <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="mothername"
                      id="email"
                      value={ParentData.mothername}
                      onChange={handleChange}
                      label="Mother Name"
                      name="mothername"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="motheremail"
                      label="Mother Email"
                      value={ParentData.motheremail}
                      onChange={handleChange}
                      name="motheremail"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="number"
                      id="mothercontact"
                      label="Mother Contact Number"
                      value={ParentData.mothercontact}
                      onChange={handleChange}
                      name="mothercontact"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="motheroccupation"
                      label="Mother Occupation"
                      value={ParentData.motheroccupation}
                      onChange={handleChange}
                      name="motheroccupation"
                    />
                  </Grid>

             


                 
                </Grid>
              </div>
            </form>
            <div className="text-center">
              <Button
                variant="contained"
                className="mb-5"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default StudentParentDetails;
