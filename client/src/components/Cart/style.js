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
    fontWeight: "bold",
  },
  delete: {
    marginTop: 40,
  },
  heading: {
    marginTop: 90,
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "underline",
    textDecorationColor: "#0097a7",
  },
  subtotal: {
    textAlign: "center",
    textTransform: "uppercase",
  },
  checkout: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "#80cbc4",
    color: "black",
    borderRadius: 0,
  },
  card: {
    backgroundColor: "#eeeeee",
    borderRadius: 0,
  },
  quantity: {
    marginTop: 40,
  },
  stock: {
    color: "#00838f",
    textTransform: "uppercase",
    fontSize: "small",
  },
  message: {
    color: "red",
  },
  price: {
    textTransform: "uppercase",
    fontSize: "small",
    fontWeight: "bold",
  },
}));
