import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: 150,
  },
  main: {
    marginTop: "50px",
  },
  learn: {
    textDecoration: "none",
    color: "black",
  },
  stock: {
    color: "#009688",
    textTransform: "uppercase",
    fontSize: "small",
  },
  itemName: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: "small",
    fontWeight: "bold",
  },
  image: {
    paddingLeft: "20px",
    paddingTop: "5px",
  },
  price: {
    textTransform: "uppercase",
    fontSize: "small",
    color: "black",
    fontWeight: "bold",
  },
});
