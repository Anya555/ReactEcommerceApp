import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "./style";
import API from "../../utils/API";

const Signup = (props) => {
  const classes = useStyles({});
  const [formObject, setFormObject] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.addUserToDb(formObject)
      .then((res) => {
        console.log(res);
        props.history.replace("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <>
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  variant="outlined"
                  name="firstName"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  id="lastname"
                  label="Last Name"
                  variant="outlined"
                  name="lastName"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  label="Email"
                  fullWidth
                  variant="outlined"
                  autoComplete="email"
                  name="email"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="password"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  type="password"
                  name="password"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid>
                Already have an account?
                <Link to="/login" style={{ textDecoration: "none" }}>
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
export default withRouter(Signup);
