import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    backgroundColor: "white",
    flexWrap: "wrap",
    marginTop: 150,
    width: 1000,
    marginLeft: 150,
  },
  list: {
    listStyleType: "none",
  },
  name: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  close: {
    backgroundColor: "#eeeeee",
  },
  price: {
    color: "#880e4f",
  },
}));
