import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
