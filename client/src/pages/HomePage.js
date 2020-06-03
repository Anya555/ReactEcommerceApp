import React from "react";
import Container from "@material-ui/core/Container";
import ItemCard from "../components/ItemCard";
import { useStyles } from "./homePageStyle";

const HomePage = () => {
  const classes = useStyles({});
  return (
    <Container component="main" className={classes.main}>
      <ItemCard />
    </Container>
  );
};
export default HomePage;
