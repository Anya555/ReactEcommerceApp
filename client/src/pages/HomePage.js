import React from "react";
import SecondNavbar from "../components/SecondNavbar";
import Container from "@material-ui/core/Container";
import { useStyles } from "./homePageStyle";

const HomePage = () => {
  const classes = useStyles({});
  return (
    <Container component="main" className={classes.main}>
      <SecondNavbar />
    </Container>
  );
};
export default HomePage;
