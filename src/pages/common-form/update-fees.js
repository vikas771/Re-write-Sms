import { useEffect, useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import Style from "../teacher/teacher.module.css";
import Router from "next/router";
import { callApi } from "../../../utils/apicall";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateFees = () => {
  const router = useRouter();
  const { id } = router.query;

  const [classId, setClassId] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [previosClass , setPreviousClass] = useState("")

  const [StuFee, setStuFee] = useState({
    fees: 0,
  });

  let name, value;

  const newListStudent = async () => {
    const ClassId = await callApi("get", "/allclass");
    setClassId(ClassId.data.allClasses);
  };

  const getAllDetailsById = async () => {
    try {
      let details = await callApi("get", `/feesbyclassid/${id}`);
      setPreviousClass(details.data);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    newListStudent();
    getAllDetailsById()
  }, []);



  const handleClassSelect = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setStuFee({ ...StuFee, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let details = await callApi("put", `/updatefee/${id}`, {
        fees: StuFee.fees,
        // classId: selectedClass,
      });
      console.log(details);
      toast.success("Fee Updated successfully !");
    
      Router.push("/common-form/view-fees");
    } catch (error) {
      console.log(error);
      toast.error("Something gone wrong !");
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
            <h2 className={Style.headerStyle}>Update-Fees</h2>
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

                {/* <Grid item xs={12}>
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
                </Grid> */}
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

export default UpdateFees;
