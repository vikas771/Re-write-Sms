import { Button, Grid, TextField } from "@mui/material";
import { callApi } from "../../../../utils/apicall";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";
import Style from '../comm.module.css'

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log("log data is here ", data);
    try {
      let Details = await callApi("post", "/login", data);
      if (Details.status == 200) {
       localStorage.setItem("userToken", JSON.stringify(Details.data));
       localStorage.setItem("Token", Details.data.token);
        router.push("/");  
        router.reload();
        toast.success("Login success", { autoClose: 3000 });
      }
    } catch (error) {
      console.log(error);
      toast.error("please check your credentials!", { autoClose: 3000 });
    }
  };
  return (
    <>
      <section
        className={`background-radial-gradient  ${Style.backg} overflow-hidden`}
      >
        <div
          className={`container px-4 py-5 px-md-5 text-center text-lg-start my-5  `}
        >
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Aurasoft
                <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  DIGITAL TRANSFORMATION PARTNER
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Aurasoft School Management System
              </p>
            </div>
            <div className="col-lg-5 mb-5 mb-lg-0 position-relative text-center">
              <div
                id={Style.radiuss}
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id={Style.SecondRad}
                className="position-absolute shadow-5-strong"
              />
              <div className={`card bg-glass ${Style.thirdSty}`}>
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid>
                      <Grid>
                        <TextField
                          label="Email"
                          variant="standard"
                          type="email"
                          name="email"
                          autoComplete="off"
                          className="my-2"
                          {...register("email", { required: true })}
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
                        {errors.exampleRequired && (
                          <div>password is required</div>
                        )}
                      </Grid>
                    </Grid>
                    <div className="text-center my-2 mt-4">
                      <Button variant="contained" color="primary" type="submit">
                        Login
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
}
export default Login;
