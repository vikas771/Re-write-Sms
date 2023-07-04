import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
import axios from "axios";
import nextConfig from "../../../next.config";
import { callApi } from "../../../utils/apicall";
import Link from "next/link";
import Style from "./common.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import  Router  from "next/router";



const index = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("data is here ", data);
    try {
      let details = await callApi("post", "/addteacher", data);
      toast.success("Added successfully !");
      Router.push("/admin/admin-deshboard");
    } catch (error) {
      console.log(error);
      toast.error("Something gone wrong !");
    }
  };


  return (
    <>
      <Grid>
        <Paper elevation={20} className={Style.paperStyle}>
          <Grid align="center">
            <Avatar className={Style.avatarStyle}>
              <AddCircleOutlineIcon />
            </Avatar>
            <h2 className={Style.headerStyle}>Add</h2>
          </Grid>

          <div className="container">
            {/* <form className="row mb-3" onSubmit={handleSubmit}>
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
               

                <Grid className={Style.dropWidth}>
                  <div className="dropdown">
                    <button
                      className={`btn btn-secondary dropdown-toggle ${Style.dropWidth}`}
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Select-Role
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Teacher
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Student
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </form> */}
            <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Grid>
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="my-2"
                    {...register("name", {
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message:
                          "Name should only contain alphabetic characters",
                      },
                      required: { value: true, message: "Enter School Name" },
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

                <Grid>
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
                </Grid>

                <Grid>
                  <TextField
                    label="Role"
                    fullWidth
                    variant="standard"
                    type="role"
                    name="role"
                    autoComplete="off"
                    className="my-2"
                    {...register("role", { required:true })}
                    required
                  />
                  {errors.role && (
                    <small style={{ color: "red" }}>
                      {" "}
                      {errors.role.message}{" "}
                    </small>
                  )}
                </Grid>



              </Grid>
              <div className="text-center my-2 mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default index;
