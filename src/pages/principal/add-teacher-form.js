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

// import Style from './addschool.module.css'
import { Try } from "@mui/icons-material";

const index = () => {
    // const getToken = () =>{
    //   const newToken = localStorage.getItem('userToken')
    //   const newt = JSON.parse(newToken)
    //   console.log("local storage token is ",newt );
    //   console.log("local storage token is ",newt.user.role );
    // }

    // getToken()

  const [schoolData, setSchoolData] = useState({
    teachername:"",
    teacheremail:"",
    teacherepassword:"",teachernumber:""
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
    //     schoolname: schoolData.teachername,
    //     address: schoolData.teacheremail,
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
            <h2 style={headerStyle}>Add Teacher</h2>
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
                    id="teachername"
                    value={schoolData.teachername}
                    onChange={handleChange}
                    label="Name"
                    name="teachername"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="email"
                    id="teacheremail"
                    value={schoolData.teacheremail}
                    onChange={handleChange}
                    label="Email"
                    name="teacheremail"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="teacherepassword"
                    value={schoolData.teacherepassword}
                    onChange={handleChange}
                    label="Password"
                    name="teacherepassword"
                  />
                </Grid>
                

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="teachernumber"
                    value={schoolData.teachernumber}
                    onChange={handleChange}
                    label="Number"
                    name="teachernumber"
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
