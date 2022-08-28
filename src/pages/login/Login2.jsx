import { yupResolver } from "@hookform/resolvers/yup";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HttpsIcon from "@mui/icons-material/Https";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Muibutton from "../../components/button/Muibutton";
import { CheckBoxField } from "../../components/CheckBox/CheckBoxField";
import { Input } from "../../components/input/input";
import Slider from "react-slick";
import Carousel from "../../components/carousel/Carousel";

const schema = yup.object().shape({
  userName: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

const theme = createTheme();

const Login2 = () => {
  const onHandleSubmit = (data) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    console.log({
      userName: data.userName,
      password: data.password,
    });
  };

  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
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
                  Sign in
                </Typography>
                <Typography variant="body2" color="gray" mb={5} mt={1}>
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs
                </Typography>
              </Grid>
              <form
                noValidate
                onSubmit={handleSubmit((data) => onHandleSubmit(data))}
              >
                <Input
                  {...register("userName")}
                  control={control}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="userName"
                  label="User name"
                  name="userName"
                  autoComplete="userName"
                  autoFocus
                  icon={AccountCircleIcon}
                />
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

                <Grid
                  item
                  container
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <CheckBoxField
                    color="primary"
                    label="Keep me signed in"
                    name="remember"
                    control={control}
                  />

                  <Link href="#" variant="body2">
                    Recovery Password
                  </Link>
                </Grid>

                <Muibutton
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  mt={3}
                >
                  Login
                </Muibutton>
              </form>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                mb={3}
              >
                {"Dont have an account yet? "}
                <Link color="primary" href="https://mui.com/" underline="none">
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

export default Login2;
