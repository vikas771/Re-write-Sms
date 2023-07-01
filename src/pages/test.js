import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import { callApi } from "../../utils/apicall";
import { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useRouter } from "next/router";
import { Avatar, Button, Grid, Paper, TextField } from "@mui/material";
// import Style from "../pages/super-admin/add-school-form/addschool.module.css";

const Test = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("log data is here ", data);
    try {
      let data = await callApi("post", "/createschool", schoolData);
      alert("school added successfully");

      
        toast.success("login successfully");
      
    } catch (error) {
      console.log(error);
      alert("some thing went wrong")
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
            <h2 className={Style.headerStyle}>Add School</h2>
          </Grid>

          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Grid>
                  <TextField
                    label="School Name"
                    variant="standard"
                    type="text"
                    name="schoolname"
                    autoComplete="off"
                    className="my-2"
                    {...register("schoolname", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>school name is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Owner Name"
                    variant="standard"
                    type="text"
                    name="name"
                    autoComplete="off"
                    className="my-2"
                    {...register("name", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>owner name is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Address"
                    variant="standard"
                    type="text"
                    name="address"
                    autoComplete="off"
                    className="my-2"
                    {...register("address", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>address is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="City"
                    variant="standard"
                    type="text"
                    name="city"
                    autoComplete="off"
                    className="my-2"
                    {...register("city", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>city is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Email"
                    variant="standard"
                    type="email"
                    name="email"
                    autoComplete="off"
                    className="my-2"
                    {...register("city", { required: true })}
                    required
                  />
                  {errors.exampleRequired && <div>email is required</div>}
                </Grid>

                <Grid>
                  <TextField
                    label="Password"
                    variant="standard"
                    type="Password"
                    required
                    name="password"
                    autoComplete="off"
                    className="my-2"
                    {...register("password", { required: true })}
                  />
                  {errors.exampleRequired && <div>password is required</div>}
                </Grid>
              </Grid>
              <div className="text-center my-2 mt-4">
                <Button variant="contained" color="primary" type="submit">
                  Add
                </Button>
              </div>
            </form>
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default Test;
