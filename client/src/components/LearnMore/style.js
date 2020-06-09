import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    flexWrap: "wrap",
    marginTop: 50,
    padding: 50,
  },
  list: {
    listStyleType: "none",
  },
  name: {
    textTransform: "uppercase",
  },
  close: {
    marginTop: 40,
  },
}));
