import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  icon: {
    margin: theme.spacing(1),
    backgroundColor: "#ad1457",
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#ad1457",
    color: "#fafafa",
  },
  progress: {
    position: "absolute",
  },
}));

const Signup = () => {
  const classes = useStyles({});
  return (
    <>
      <br></br>
      <br></br>
      <br></br>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.icon}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="First Name"
                  defaultValue=" "
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="outlined-required"
                  label="Last Name"
                  defaultValue=" "
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  fullWidth
                  defaultValue=" "
                  variant="outlined"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  type="password"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                >
                  Sign Up
                  {/* {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )} */}
                </Button>
              </Grid>
              <Grid>
                Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  {" "}
                  Log in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
export default Signup;
