import React from "react";
import Container from "@material-ui/core/Container";
import ItemCard from "../components/ItemCard";
import { useStyles } from "./homePageStyle";

const HomePage = (props) => {
  const classes = useStyles({});
  return (
    <Container component="main" className={classes.main}>
      <ItemCard
        search={props.search}
        image={props.image}
        user={props.user}
        cartItems={props.cartItems}
        setCartItems={props.setCartItems}
        itemsCount={props.itemsCount}
        setItemsCount={props.setItemsCount}
        setShouldGetCartContent={props.setShouldGetCartContent}
      />
    </Container>
  );
};
export default HomePage;
