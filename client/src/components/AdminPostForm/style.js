import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    backgroundColor: "#ad1457",
    color: "#fafafa",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: "large",
  },
}));
