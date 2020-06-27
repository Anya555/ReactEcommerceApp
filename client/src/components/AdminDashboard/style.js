import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  headers: {
    backgroundColor: "black",
    color: "white",
  },
  tableWidth: {
    width: 180,
  },
  description: {
    width: 400,
  },
  fab: {
    marginTop: theme.spacing(11),
  },
  delete: {
    cursor: "pointer",
  },
  customBadge: {
    backgroundColor: "#880e4f",
    color: "white",
  },
}));
