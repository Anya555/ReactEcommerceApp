import React from "react";
import SecondNavbar from "../components/SecondNavbar";
import Container from "@material-ui/core/Container";
import ItemCard from "../components/ItemCard";
import { useStyles } from "./homePageStyle";

const HomePage = () => {
  const classes = useStyles({});
  return (
    <Container component="main" className={classes.main}>
      <SecondNavbar />
      <ItemCard />
    </Container>
  );
};
export default HomePage;
