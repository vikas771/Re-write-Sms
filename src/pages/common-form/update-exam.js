import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Style from "../super-admin/sup-comm.module.css";
import Router from "next/router";
import { useEffect, useState } from "react";
import { callApi } from "../../../utils/apicall";

const UpdateExam = () => {
  const router = useRouter();
  const { id } = router.query;
  const [studentData, setStudentData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getAllDetailsById = async () => {
    try {
      let details = await callApi("get", `/examdetails/${id}`);
      setStudentData(details.data.exam);
      console.log("details of exam ", details.data.exam);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/examupdate/${id}`, data);
      Router.push("/common-form/view-exam");
      toast.success("Update  successfully !");
    } catch (error) {
      console.log(error);
      toast.error("Something gone wrong !");
    }
  };

  useEffect(() => {
    getAllDetailsById();
  }, []);

  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle}>
          <Grid align="center">
            <Avatar className={Style.avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={Style.headerStyle}>Edit Exam Details</h2>
          </Grid>

          <div className="container">
            {studentData && (
              <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                  <Grid>
                    <TextField
                      label="subject"
                      variant="standard"
                      defaultValue={studentData.subject}
                      fullWidth
                      type="text"
                      name="subject"
                      autoComplete="off"
                      className="my-2"
                      {...register("subject", {
                        pattern: {
                        },
                      })}
                      required
                    />
                    {errors.subject && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.subject.message}{" "}
                      </small>
                    )}
                  </Grid>

                  <Grid>
                    <TextField
                      label="total-Marks"
                      fullWidth
                      variant="standard"
                      defaultValue={studentData.totalMarks}
                      type="text"
                      name="totalMarks"
                      autoComplete="off"
                      className="my-2"
                      {...register("totalMarks", {
                        
                      })}
                      required
                    />
                    {errors.email && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.totalMarks.message}{" "}
                      </small>
                    )}
                  </Grid>
                  {/* <Grid>
                    <TextField
                      label="Date"
                      fullWidth
                      variant="standard"
                      defaultValue={studentData.date}
                      type="date"
                      name="date"
                      autoComplete="off"
                      className="my-2"
                      {...register("date", {
                        
                      })}
                      required
                    />
                    {errors.email && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.email.message}{" "}
                      </small>
                    )}
                  </Grid> */}
                  <Grid>
                    <TextField
                      label="Duration"
                      fullWidth
                      variant="standard"
                      defaultValue={studentData.duration}
                      type="text"
                      name="duration"
                      autoComplete="off"
                      className="my-2"
                      {...register("duration", {
                        
                      })}
                      required
                    />
                    {errors.email && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.duration.message}{" "}
                      </small>
                    )}
                  </Grid>
                </Grid>
                <div className="text-center my-2 mt-4">
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default UpdateExam;
