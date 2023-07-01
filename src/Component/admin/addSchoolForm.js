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

import Style from "./addschool.module.css";
import { Try } from "@mui/icons-material";
import nextConfig from "../../../next.config";

const Addschool = () => {


  const getToken = () =>{
    const newToken = localStorage.getItem('userToken')
    const newt = JSON.parse(newToken)
    console.log("local storage token is ",newt );
    console.log("local storage token is ",newt.user.role );
  }

  getToken()

    const [schoolData , setSchoolData] = useState({
        schoolname:"", sclimg: "", address:"",city:"",  pincode:"", state:"", country:"", ownername:"", ownernumber:"", owneremail:"", ownerimg:"", principalname:"", principalnumber:"", principalemail: "", accountantname:"", accountantemail:"", accountantnumber:"", schoolid:"", establishedyear:"", enrollmentyear:"", totalstudent:"", totalteacher:"",  website:"", socialmedia:"",      
      })
    
      let name , value; 
    
      const  handleChange = ((e)=>{
         name = e.target.name;
         value = e.target.value;
    // console.log("name", name);
    // console.log("value", value);
        setSchoolData({...schoolData, [name] : value})
        
      })
    
      const handleSubmit = () =>{
        // e.prevent.default();
        console.log("schoolData", schoolData);
        // alert("your data has been submitted")

        try {
          const addSchoolData = axios.post(`${nextConfig.ApiUrl}/createschool`,{
            schoolname:schoolData.schoolname,
            // schoolimage:schoolData.sclimg,
            address:schoolData.address,
            city:schoolData.city,

            // ownername:schoolData.ownername,
            // owneremail:schoolData.ownernumber,
            // ownerphonenumber:schoolData.owneremail,
            // ownerimage:schoolData.ownerimg,
            // principalname:schoolData.principalname,
            // principalphonenumber:schoolData.principalnumber,
            // principalemail:schoolData.principalemail,
            // contectpersonname:schoolData.accountantname,
            // contectpersonemail:schoolData.accountantemail,
            // contectpersonphonenumber:schoolData.accountantnumber,
            // schoolId:schoolData.schoolid,
            // entrollmentYear:schoolData.establishedyear,
            // totalstudent:schoolData.totalstudent,
            // totalteacher:schoolData.totalteacher,
            // schoolwebsite:schoolData.website,
          })
                console.log("addSchoolData is here ",addSchoolData);

        } catch (error) {
          console.log(error);
        }

        
      }



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
            <h2 style={headerStyle}>Add School</h2>
          </Grid>

          
          <div className="container">
        <form className="row mb-3" onSubmit={handleSubmit}>
          <div className="col-md-4 mx-auto">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  // className={style.labelcolor}
                  variant="standard"
                  required
                  fullWidth
                  type="text"
                  id="schoolname"
                  value={schoolData.schoolname}
                  onChange={handleChange}
                  label="School Name"
                  name="schoolname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="sclimg"
                  label="upload school"
                  value={schoolData.sclimg}
                  onChange={handleChange}
                  name="sclimg"
                  type="file"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  type="text"
                  id="address"
                  value={schoolData.address}
                  onChange={handleChange}
                  label="Address"
                  name="address"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  type="text"
                  id="city"
                  value={schoolData.city}
                  onChange={handleChange}
                  label="City"
                  name="city"
                />
              </Grid>

              {/* <Grid item xs={12}>
                <FormControl variant="standard" >
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
                  type="number"
                  id="pincode"
                  label="Pin Code"
                  value={schoolData.pincode}
                  onChange={handleChange}
                  name="pincode"
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
                  value={schoolData.state}
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
                  id="country"
                  label="Country"
                  value={schoolData.country}
                  onChange={handleChange}
                  name="country"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  type="text"
                  id="ownername"
                  label="Owner Name"
                  value={schoolData.ownername}
                  onChange={handleChange}
                  name="ownername"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="ownernumber"
                  label="Owner Number"
                  value={schoolData.ownernumber}
                  onChange={handleChange}
                  name="ownernumber"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="owneremail"
                  value={schoolData.owneremail}
                  onChange={handleChange}
                  label="Owner Email Address"
                  name="owneremail"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="ownerimg"
                  label="upload file"
                  value={schoolData.ownerimg}
                  onChange={handleChange}
                  name="ownerimg"
                  type="file"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="principalname"
                  value={schoolData.principalname}
                  onChange={handleChange}
                  label="Principal Name"
                  name="principalname"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="principalnumber"
                  value={schoolData.principalnumber}
                  onChange={handleChange}
                  label="Principal Phone Number"
                  name="principalnumber"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="principalemail"
                  value={schoolData.principalemail}
                  onChange={handleChange}
                  label="Principal Email"
                  name="principalemail"
                />
              </Grid>
            </Grid>
          </div>
          <div className="col-md-4 mx-auto">
            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantname"
                label="Accountant Name"
                value={schoolData.accountantname}
                  onChange={handleChange}
                name="accountantname"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantemail"
                label="Accountant Email"
                value={schoolData.accountantemail}
                  onChange={handleChange}
                name="accountantemail"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="standard"
                required
                fullWidth
                id="accountantnumber"
                label="Accountant Number"
                value={schoolData.accountantnumber}
                  onChange={handleChange}
                name="accountantnumber"
              />
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="schoolid"
                  label="School Id"
                  value={schoolData.schoolid}
                  onChange={handleChange}
                  name="schoolid"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="establishedyear"
                  label="Established Year"
                  value={schoolData.establishedyear}
                  onChange={handleChange}
                  name="establishedyear"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="enrollmentyear"
                  label="Enrollment Year"
                  value={schoolData.enrollmentyear}
                  onChange={handleChange}
                  name="enrollmentyear"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="totalstudent"
                  value={schoolData.totalstudent}
                  onChange={handleChange}
                  label="Total Student"
                  name="totalstudent"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="totalteacher"
                  label="Total Teacher"
                  value={schoolData.totalteacher}
                  onChange={handleChange}
                  name="totalteacher"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="website"
                  label="School Website"
                  value={schoolData.website}
                  onChange={handleChange}
                  name="website"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="socialmedia"
                  label="Social Media Link"
                  value={schoolData.socialmedia}
                  onChange={handleChange}
                  name="socialmedia"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="standard"
                  required
                  fullWidth
                  id="socialmedia"
                  label="Social Media Link"
                  value={schoolData.socialmedia}
                  onChange={handleChange}
                  name="socialmedia"
                />
              </Grid>

            </Grid>
          </div>
        </form>
        <div className="text-center">

        <Button variant="contained"  className="mb-5" type="submit" onClick={handleSubmit}>Submit</Button>
        </div>

      </div>

        </Paper>
      </Grid>
    </>
  );
};

export default Addschool;
