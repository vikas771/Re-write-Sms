import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import { useRouter } from "next/router";
import Style from "../sup-comm.module.css";
import Router from "next/router";
import { callApi } from "../../../../utils/apicall";
import { useEffect, useState } from "react";

const EditSchool = () => {
  const router = useRouter();
  const { id } = router.query;
  const [schoolDetails, setSchoolDetails] = useState("");


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getAllDetailsById = async () => {
    try {
      let details = await callApi("get", `/schooldetails/${id}`);
      setSchoolDetails(details.data.School);
      // console.log("details", details.data.School);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      let details = await callApi("put", `/updateschooldetails/${id}`, data);
      Router.push("/super-admin/school-list");
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
            <h2 className={Style.headerStyle}>Edit School Details</h2>
          </Grid>

          <div className="container">
            {schoolDetails && (
              <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
                <Grid>
                  <Grid>
                    <TextField
                      label="School Name"
                      variant="standard"
                      defaultValue={schoolDetails.schoolname}
                      fullWidth
                      type="text"
                      name="schoolname"
                      autoComplete="off"
                      className="my-2"
                      {...register("schoolname", {
                        pattern: {
                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                          message:
                            "School Name should only contain alphabetic characters",
                        },
                        required: { value: true, message: "Enter School Name" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                        
                      })}
                      required
                    />
                    {errors.schoolname && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.schoolname.message}{" "}
                      </small>
                    )}
                  </Grid>

                  <Grid>
                    <TextField
                      label="Owner Name"
                      fullWidth
                      variant="standard"
                      defaultValue={schoolDetails.name}
                      type="text"
                      name="name"
                      autoComplete="off"
                      className="my-2"
                      {...register("name", {
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message:
                            "Owner Name should only contain alphabetic characters",
                        },
                        required: { value: true, message: "Enter owner name" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                        maxLength: {
                          value: 8,
                          message: "Enter maximum 8 Character",
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
                      label="Address"
                      fullWidth
                      variant="standard"
                      defaultValue={schoolDetails.address}
                      type="text"
                      name="address"
                      autoComplete="off"
                      className="my-2"
                      {...register("address", {
                        required: { value: true, message: "Enter Address" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                        maxLength: {
                          value: 10,
                          message: "Enter maximum 8 Character",
                        },
                      })}
                      required
                    />
                    {errors.address && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.address.message}{" "}
                      </small>
                    )}
                  </Grid>

                  <Grid>
                    <TextField
                      label="City"
                      fullWidth
                      variant="standard"
                      defaultValue={schoolDetails.city}
                      type="text"
                      name="city"
                      autoComplete="off"
                      className="my-2"
                      {...register("city", {
                        pattern: {
                          value: /^[A-Za-z]+$/,
                          message:
                            "City Name should only contain alphabetic characters",
                        },
                        required: { value: true, message: "Enter City" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                        maxLength: {
                          value: 8,
                          message: "Enter maximum 8 Character",
                        },
                      })}
                      required
                    />
                    {errors.city && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.city.message}{" "}
                      </small>
                    )}
                  </Grid>

                  {/* <Grid>
                    <TextField
                      label="Email"
                      fullWidth
                      variant="standard"
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
                  </Grid> */}

                  {/* <Grid>
                    <TextField
                      label="Password"
                      fullWidth
                      variant="standard"
                      type="Password"
                      required
                      name="password"
                      autoComplete="off"
                      className="my-2"
                      {...register("password", {
                        required: { value: true, message: "Enter Password" },
                        minLength: {
                          value: 3,
                          message: "Enter minimum 3 Character",
                        },
                        maxLength: {
                          value: 10,
                          message: "Enter maximum 8 Character",
                        },
                      })}
                    />
                    {errors.password && (
                      <small style={{ color: "red" }}>
                        {" "}
                        {errors.password.message}{" "}
                      </small>
                    )}
                  </Grid> */}
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

export default EditSchool;
