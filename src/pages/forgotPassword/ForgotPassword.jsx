import { yupResolver } from "@hookform/resolvers/yup";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import HttpsIcon from "@mui/icons-material/Https";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Muibutton from "../../components/button/Muibutton";
import { Input } from "../../components/input/input";
import { useState } from "react";
import Carousel from "../../components/carousel/Carousel";


const schema = yup.object().shape({
  email: yup.string().email("Enter valid email!").required("Email is required"),
});

const schema2 = yup.object().shape({
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const theme = createTheme();

const ForgotPass = () => {

  const [confirmReset, setConfirmReset] = useState(false);

  const onHandleSubmit = (data) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    if (confirmReset) {
      console.log(data);
    } else setConfirmReset(true);
  };

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(confirmReset ? schema2 : schema),
  });

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          direction="column"
          alignItems="center"
          justifyContent="center"
          xs={false}
          sm={6}
          sx={{
            backgroundColor: "#285cc4",
            height: "100vh",
            display: { xs: 'none', sm: 'block' }
          }}
        >
         <Carousel />
        </Grid>

        <Grid item container xs={12} sm={6} justifyContent="center">
          <Grid
            container
            item
            xs={10}
            sm={11}
            md={9}
            lg={7}
            xl={6}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            // component={Paper}
            square
            sx={{ height: "100vh" }}
          >
            <Grid item />
            <Grid item>
              <Grid
                item
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
              >
                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Forgot Password
                </Typography>
                <Typography variant="body2" color="gray" mb={5} mt={1}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs
                </Typography>
              </Grid>
              {!confirmReset ? (
                <form
                  //  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit((data) => onHandleSubmit(data))}
                >
                  <Input
                    {...register("email")}
                    control={control}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    icon={AlternateEmailIcon}
                  />

                  <Muibutton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    //className={classes.submit}
                    size="large"
                    mt={3}
                  >
                    Submit
                  </Muibutton>
                </form>
              ) : (
                <form
                  //  className={classes.form}
                  noValidate
                  onSubmit={handleSubmit((data) => onHandleSubmit(data))}
                >
                  <Input
                    {...register("password")}
                    control={control}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    icon={HttpsIcon}
                  />
                  <Input
                    {...register("confirmPassword")}
                    control={control}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="current-password"
                    icon={HttpsIcon}
                  />

                  <Muibutton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    //className={classes.submit}
                    size="large"
                    mt={3}
                  >
                    Reset Password
                  </Muibutton>
                </form>
              )}
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mb={3}
              >
                {"Dont have an account yet? "}
                <Link
                  color="primary"
                  href="https://mui.com/"
                  // className={classes.noDecoration}
                  underline="none"
                >
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default ForgotPass;
