import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: "none",
    color: "black",
    textTransform: "uppercase",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  app: {
    margin: 0,
    backgroundColor: "white",
    boxShadow: "none",
  },
  category: {
    backgroundColor: "#b2dfdb",
  },
  dehydrator: {
    backgroundColor: "#eeeeee",
  },
}));
