import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./style";
import API from "../../utils/API";
import MenuItem from "@material-ui/core/MenuItem";
import ImageUpload from "../ImageUpload";
import firebase from "../../firebase";

const PostForm = (props) => {
  const classes = useStyles({});
  const [formObject, setFormObject] = useState([]);
  const [shouldSave, setShouldSave] = useState(false);
  
  useEffect(() => {
    if (shouldSave === true) {
      addItemToDb();
    }
  }, [shouldSave]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const addItemToDb = () => {
    API.postItem(formObject)
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        // save image name for each item to mongoDB
        firebase.storage
          .ref()
          .child("images/" + props.image.name)
          .put(props.image);
      })
      .then(() => {
        props.history.replace("/admin-dashboard");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormObject({ ...formObject, image: props.image.name });
    setShouldSave(true);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Fill out a form to add item
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="name"
                label="Name"
                variant="outlined"
                name="name"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                select
                defaultValue=" "
                label="Category"
                name="category"
                variant="outlined"
                onChange={handleInputChange}
              >
                <MenuItem value=" ">...</MenuItem>
                <MenuItem value="blenders">Blenders</MenuItem>
                <MenuItem value="juicers">Juicers</MenuItem>
                <MenuItem value="dehydrators">Dehydrators</MenuItem>
                <MenuItem value="oilPresses">Oil Presses</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="dbQuantity"
                label="Quantity"
                variant="outlined"
                name="dbQuantity"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="price"
                label="Price"
                variant="outlined"
                name="price"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="description"
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                name="description"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <ImageUpload setImage={props.setImage} />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default withRouter(PostForm);
