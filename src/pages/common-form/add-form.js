import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {
  Avatar,
  Button,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import axios from "axios";
import nextConfig from "../../../next.config";
import { callApi } from "../../../utils/apicall";

const index = () => {
  
  const [schoolData, setSchoolData] = useState({
    name:"",
    email:"",
    password:"",
    role:""
  });


  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async() => {

    try {
      let data = await callApi("post", "/addteacher", schoolData);
      console.log(data);
      alert("Added successfully");
      // router.push("/super-admin/all-user-list");
    } catch (error) {
      console.log(error);
    }

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
            <h2 style={headerStyle}>Add</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                 <Grid item xs={12}>
                   <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="name"
                    value={schoolData.name}
                    onChange={handleChange}
                    label="Name"
                    name="name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="email"
                    id="email"
                    value={schoolData.email}
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
                    id="password"
                    value={schoolData.password}
                    onChange={handleChange}
                    label="Password"
                    name="password"
                  />
                </Grid>
               
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="role"
                    value={schoolData.role}
                    onChange={handleChange}
                    label="User Role"
                    name="role"
                  />
                </Grid>

              </Grid>
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
