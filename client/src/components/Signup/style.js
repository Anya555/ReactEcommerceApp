import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
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
    backgroundColor: "#880e4f",
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#80cbc4",
    color: "black",
  },
  progress: {
    position: "absolute",
  },
}));
