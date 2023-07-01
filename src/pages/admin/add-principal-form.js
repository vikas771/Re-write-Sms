import { useState, useEffect } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";


const index = () => {
  const [schoolData, setSchoolData] = useState({
    principalname:"",
    principalemail:"",
    principalnumber:"",
    principalpassword:""
  });

  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    // console.log("name", name);
    // console.log("value", value);
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = () => {
    // e.prevent.default();
    console.log("schoolData", schoolData);
    // alert("your data has been submitted");

    // try {
    //   const addSchoolData = axios.post(`${nextConfig.ApiUrl}/createschool`, {
    //     schoolname: schoolData.principalname,
    //     address: schoolData.principalemail,
    //     number: schoolData.principalnumber,
    //     password: schoolData.principalpassword,
    //   });
    //   console.log("addSchoolData is here ", addSchoolData);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const paperStyle = { padding: "30px 20px", width: "400px", margin: "0 auto" };
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
            <h2 style={headerStyle}>Add Principal</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              {/* <div className="col-md-4 mx-auto"> */}
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    // className={style.labelcolor}
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="principalname"
                    value={schoolData.principalname}
                    onChange={handleChange}
                    label="Name"
                    name="principalname"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="email"
                    id="principalemail"
                    value={schoolData.principalemail}
                    onChange={handleChange}
                    label="Email"
                    name="principalemail"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="principalpassword"
                    value={schoolData.principalpassword}
                    onChange={handleChange}
                    label="Password"
                    name="principalpassword"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="number"
                    id="principalnumber"
                    value={schoolData.principalnumber}
                    onChange={handleChange}
                    label="Number"
                    name="principalnumber"
                  />
                </Grid>
              

               
                

               
              </Grid>
              {/* </div> */}
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

export default index;
