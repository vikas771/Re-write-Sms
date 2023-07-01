import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { callApi } from "../../../utils/apicall";
import Style from "./teacher.module.css";
import { ToastContainer, toast } from "react-toastify";
import  Router from "next/router";

const AddStudent = () => {
  const [Addclass, setAddclass] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  const [schoolData, setSchoolData] = useState({
    name: "",
    email: "",
    password: "",
    classId: "",
  });

  let name, value;

  const newListStudent = async () => {
    const ClassId = await callApi("get", "/allclass");
    setAddclass(ClassId.data.allClasses);
  };

  useEffect(() => {
    newListStudent();
  }, []);

  const handleClassSelect = (event) => {
    setSelectedClass(event.target.value);
    console.log(event.target.value);
  };

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setSchoolData({ ...schoolData, [name]: value });
  };

  const handleSubmit = async () => {
    const { email, password, name, role } = schoolData;

    try {
      let data = await callApi("post", "/createstudent", {
        email,
        password,
        name,
        classId: selectedClass,
      });
      console.log(data);
      toast.success("🦄 Student added successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
      Router.push("/teacher/all-studnet-list");
    } catch (error) {
      console.log(error);
      toast.error("🦄 Please check all fileds!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        theme: "light",
      });
    }
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={Style.headerStyle}>Add</h2>
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
                    label="email"
                    name="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    value={schoolData.password}
                    onChange={handleChange}
                    label="password"
                    name="password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <div>
                    <select
                      className={Style.dropClass}
                      value={selectedClass}
                      onChange={handleClassSelect}
                    >
                      <option value="">Select Class</option>
                      {Addclass.map((classData) => (
                        <option key={classData._id} value={classData._id}>
                          {classData.className}
                        </option>
                      ))}
                    </select>
                  </div>
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

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        draggable
        theme="light"
      />
      <ToastContainer />
    </>
  );
};

export default AddStudent;
