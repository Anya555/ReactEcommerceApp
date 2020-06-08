import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    display: "flex",

    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    padding: theme.spacing(5),
    boxShadow: "none",
  },
  list: {
    listStyleType: "none",
  },
  name: {
    textTransform: "uppercase",
  },
  delete: {
    marginTop: 40,
  },
  heading: {
    marginTop: 90,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
  },
}));
