import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from '../teacher/teacher.module.css'
import { ToastContainer, toast } from "react-toastify";
import  Router from "next/router";
import { callApi } from "../../../utils/apicall";

const AddFee = () => {
  const [classId, setClassId] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  const [StuFee, setStuFee] = useState({
    fees:0
  });

  console.log("lkfjsdklf===", StuFee);

  let name, value;

  const newListStudent = async () => {
    const ClassId = await callApi("get", "/allclass");
    setClassId(ClassId.data.allClasses);
    console.log("ClassId", ClassId.data.allClasses);
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
    setStuFee({ ...StuFee, [name]: value });
  };

  const handleSubmit = async () => {

    try {
      let data = await callApi("post", "/addfee", {
        fees:StuFee.fees,
        classId: selectedClass,
      });
      console.log(data);
      toast.success("🦄 Fees Submitted successfully!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
      Router.push("/admin/admin-deshboard");
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
            <h2 className={Style.headerStyle}>Add-Fees</h2>
          </Grid>

          <div className="container">
            <form className="row mb-3" onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                
               
                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="fees"
                    id="fees"
                    value={StuFee.fees}
                    onChange={handleChange}
                    label="fees"
                    name="fees"
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
                      {classId.map((classData) => (
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

export default AddFee;

