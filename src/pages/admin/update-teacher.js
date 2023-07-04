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

const UpdateStudent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [teacherDetails, seTeacherDetails] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getAllDetailsById = async () => {
    try {
      let details = await callApi("get", `/singleteacher/${id}`);
      seTeacherDetails(details.data.user);
      console.log("details of teacher", details.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/updateteacher/${id}`, data);
      Router.push("/admin/all-teacher");
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
            <h2 className={Style.headerStyle}>Edit user Details</h2>
          </Grid>

          <div className="container">
            {teacherDetails && (
              <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                  <Grid>
                    <TextField
                      label="User Name"
                      variant="standard"
                      defaultValue={teacherDetails.name}
                      fullWidth
                      type="text"
                      name="name"
                      autoComplete="off"
                      className="my-2"
                      {...register("name", {
                        pattern: {
                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                          message:
                            "Name should only contain alphabetic characters",
                        },
                        required: { value: true, message: "Enter Name" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                      })}
                      required
                    />
                    {errors.name && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.name.message}{" "}
                      </small>
                    )}
                  </Grid>

                  <Grid>
                    <TextField
                      label="Email"
                      fullWidth
                      variant="standard"
                      defaultValue={teacherDetails.email}
                      type="email"
                      name="email"
                      autoComplete="off"
                      className="my-2"
                      {...register("email", {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid Email Address",
                        },
                      })}
                      required
                    />
                    {errors.email && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.email.message}{" "}
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

export default UpdateStudent;
