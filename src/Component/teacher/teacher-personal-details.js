import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Paper } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import { Grid, TextField } from "@mui/material";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

const TeacherDetails = () => {
  const [teacherData, setteacherData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    Dob: "",
    bloodgroup: "",
    studentnumber: "",
    teacherimg: "",
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setteacherData({ ...teacherData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("teacherData", teacherData);
    alert("your data has been submitted");
  };

  const paperStyle = { padding: "30px 20px", width: "900px", margin: "0 auto" };
  const headerStyle = { margin: "8px" };
  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 style={headerStyle}>Teacher Personal Information</h2>
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
                      id="fname"
                      value={teacherData.fname}
                      onChange={handleChange}
                      label="First Name"
                      name="fname"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      value={teacherData.email}
                      onChange={handleChange}
                      label="Email"
                      name="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="address"
                      value={teacherData.address}
                      onChange={handleChange}
                      label="Address"
                      name="address"
                    />
                  </Grid>

                  {/* <Grid item xs={12}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: "100%" }}>
                  <InputLabel id="city">City</InputLabel>
                  <Select
                    labelId="city"
                    id="demo-simple-select-standard"
                    // value={age}
                    // onChange={handleChange}
                    label="city"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"Indore"}>Indore</MenuItem>
                    <MenuItem value={"Dewas"}>Dewas</MenuItem>
                    <MenuItem value={"Ujjain"}>Ujjain</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="Pin code"
                      label="Pin Code"
                      value={teacherData.pincode}
                      onChange={handleChange}
                      name="pincode"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="Dob"
                      label="Date of Birth"
                      value={teacherData.Dob}
                      onChange={handleChange}
                      name="Dob"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="studentnumber"
                      label="Student Number"
                      value={teacherData.studentnumber}
                      onChange={handleChange}
                      name="studentnumber"
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
                      id="lname"
                      label="Last Name"
                      value={teacherData.lname}
                      onChange={handleChange}
                      name="lname"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="password"
                      label="Password"
                      value={teacherData.password}
                      onChange={handleChange}
                      name="password"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="city"
                      label="City"
                      value={teacherData.city}
                      onChange={handleChange}
                      name="city"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="state"
                      label="State"
                      value={teacherData.state}
                      onChange={handleChange}
                      name="state"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      type="text"
                      id="bloodgroup"
                      value={teacherData.bloodgroup}
                      onChange={handleChange}
                      label="Blood Group"
                      name="bloodgroup"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      variant="standard"
                      required
                      fullWidth
                      id="teacherimg"
                      label="upload file"
                      value={teacherData.teacherimg}
                      onChange={handleChange}
                      name="teacherimg"
                      type="file"
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

export default TeacherDetails;
