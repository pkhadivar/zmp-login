import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { Input } from "../../components/input/input";
import { CheckBoxField } from "../../components/CheckBox/CheckBoxField";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsIcon from "@mui/icons-material/Https";
import Muibutton from "../../components/button/Muibutton";
import { RowContainer, RowItem, LoginImage } from "./styled";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Your password has to be at least 8 characters"),
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  const classes = useStyles();
  const { register, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Grid container>
      <CssBaseline />
      <Grid item xs={6}>
        <LoginImage src="/assets/images/email.gif" />
      </Grid>
      <Grid item xs={6}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <RowItem>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
            >
              <Input
                {...register("email")}
                control={control}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                icon={AlternateEmailIcon}
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
              <RowContainer container>
                <CheckBoxField
                  color="primary"
                  label="Remember me"
                  name="remember"
                  control={control}
                />

                <Link href="#" variant="body2">
                  Recovery Password
                </Link>
              </RowContainer>

              <Muibutton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                size="large"
              >
                Login
              </Muibutton>
            </form>
          </RowItem>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
