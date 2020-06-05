import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./style";

const ImageUpload = (props) => {
  const classes = useStyles({});

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    props.setImage(() => file);
  };

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleInputChange}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          component="span"
          fullWidth
          className={classes.button}
        >
          Select image
        </Button>
      </label>
    </div>
  );
};
export default ImageUpload;
