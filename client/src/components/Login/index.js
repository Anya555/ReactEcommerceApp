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
    API.loginUser(formObject)
      .then((res) => {
        console.log(res);
        console.log("user is logged in");
        console.log(res.data.data.role);
        if (res.data.data.role !== "admin") {
          props.history.replace("/");
        } else {
          props.history.replace("admin-dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
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
            Log in
          </Typography>

          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  fullWidth
                  defaultValue=" "
                  variant="outlined"
                  name="email"
                  autoComplete="email"
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="outlined"
                  label="Password"
                  fullWidth
                  variant="outlined"
                  name="password"
                  type="password"
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
                  Log in
                </Button>
              </Grid>
              <Grid>
                Don't have an account?
                <Link to="/signup" style={{ textDecoration: "none" }}>
                  {" "}
                  Sign up
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
