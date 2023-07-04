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

const EditProfile = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id)

  const [userData, setUserData] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getAllDetailsById = async () => {
    try {
      let details = await callApi("get", `/userbyId/${id}`);
        setUserData(details.data.user)

        console.log("details",details)
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      // let details = await callApi("get", `/userData/${id}`);
      await callApi("put", `/updateusers/${id}`, data);
      toast.success("Profile Updated successfully !");
      Router.push("/common-form/profile-page");
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
            <h2 className={Style.headerStyle}>Edit Details</h2>
          </Grid>

          <div className="container">
          {userData &&
            <form className="row mb-3" onSubmit={handleSubmit(onSubmit)}>
              <Grid>
                <Grid>
                  <TextField
                    label="Name"
                    variant="standard"
                    defaultValue={userData.name}
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

                {/* <Grid>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="standard"
                    defaultValue={userData.email}
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
                    type="text"
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
          }
          </div>
        </Paper>
      </Grid>
    </>
  );
};

export default EditProfile;
