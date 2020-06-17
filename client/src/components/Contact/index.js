import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import swal from "sweetalert";
import API from "../../utils/API";

const Contact = () => {
  const classes = useStyles({});
  const defaultInput = { name: "", email: "", message: "" };
  const [formObject, setFormObject] = useState(defaultInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const clearPrevInput = () => {
    setFormObject(defaultInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.sendEmail(formObject)
      .then(() => {
        clearPrevInput();
        swal({
          title: "Email confirmation",
          text: "Thank you, your email has been sent!",
          icon: "success",
          button: "Ok",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Contact Us
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Full name"
                  variant="outlined"
                  name="name"
                  value={formObject.name}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email address"
                  variant="outlined"
                  name="email"
                  value={formObject.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Message..."
                  variant="outlined"
                  name="message"
                  value={formObject.message}
                  multiline
                  rows={8}
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
                  Send message
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
};
export default Contact;
