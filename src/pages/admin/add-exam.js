import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from "../teacher/teacher.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "next/router";
import { callApi } from "../../../utils/apicall";

const AddExam = () => {
  const [classId, setClassId] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");

  const [studentExam, setEtudentExam] = useState({
    subject: "",
    date: "",
    duration: "",
    totalMarks: "",
  });

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
    setEtudentExam({ ...studentExam, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let data = await callApi("post", "/addexam", {
        subject: studentExam.subject,
        date: studentExam.date,
        duration: studentExam.duration,
        totalMarks: studentExam.totalMarks,
        classId: selectedClass,
      });
      console.log(data);
      toast.success("Added successfully !");
      Router.push("/admin/admin-deshboard");
    } catch (error) {
      console.log(error);
      toast.error("Something gone wrong!");
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
            <h2 className={Style.headerStyle}>Add-Exam</h2>
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
                    id="subject"
                    value={studentExam.subject}
                    onChange={handleChange}
                    label="Subject"
                    name="subject"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="duration"
                    value={studentExam.duration}
                    onChange={handleChange}
                    label="Duration"
                    name="duration"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="text"
                    id="totalMarks"
                    value={studentExam.totalMarks}
                    onChange={handleChange}
                    label="Total Marks"
                    name="totalMarks"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    variant="standard"
                    required
                    fullWidth
                    type="date"
                    id="date"
                    value={studentExam.date}
                    onChange={handleChange}
                    // label="Total Marks"
                    name="date"
                  />
                </Grid>

                <Grid className={Style.dropClass}>
                  <div className={`dropdown mt-2 ${Style.dropClass}`}>
                    <select
                      className="form-select"
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
    </>
  );
};

export default AddExam;
