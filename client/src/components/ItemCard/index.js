import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CategoriesNavbar from "../CategoriesNavbar";
import LearnMore from "../LearnMore";
import AddToCart from "../AddToCart";
import { useStyles } from "./style";
import API from "../../utils/API";
import firebase from "../../firebase";

const ItemCard = (props) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    displayAll();
  }, []);

  // opens modal that holds product info, when 'Learn More' button clicked
  const handleShow = (itemToShow) => {
    const newProducts = products.map((product) => {
      if (product._id === itemToShow._id) {
        product.open = !product.open;
      }
      return product;
    });
    setProducts(newProducts);
  };

  // display all products from database
  const displayAll = () => {
    API.displayAllItems()
      .then((res) => {
        // when 'Learn More' button is clicked, open property will change to 'true' and item modal will open up

        let items = res.data || [];
        items.forEach((item) => {
          item.open = false;
        });
        Promise.all(items.map((item) => firebase.setImageUrl(item))).then(
          () => {
            setProducts(items);
            setFilteredProducts(items);
          }
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // display items by category
  const displayItemCategory = (query) => {
    let categoryItems = products;
    categoryItems = categoryItems.filter((item) => {
      return item.category.toLowerCase() === query.toLowerCase();
    });
    setFilteredProducts(categoryItems);
  };

  return (
    <div>
      <CategoriesNavbar
        displayItemCategory={displayItemCategory}
        displayAll={displayAll}
      />
      <Grid container className={classes.main} spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={8}>
            {filteredProducts
              .filter(
                (product) =>
                  product.category
                    .toLowerCase()
                    .includes(props.search.toLowerCase()) ||
                  product.name
                    .toLowerCase()
                    .includes(props.search.toLowerCase())
              )
              .map((product) => (
                <Grid key={product._id} item>
                  <Card className={classes.root}>
                    <img
                      src={product.imgUrl}
                      alt="product"
                      height="100px"
                      width="100px"
                      className={classes.image}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.itemName}
                      >
                        {product.name}
                      </Typography>
                      <hr></hr>
                      <div className={classes.price}>$ {product.price}</div>
                      {product.dbQuantity === 0 ? (
                        <div className={classes.stock}>Out of stock</div>
                      ) : (
                        <div className={classes.stock}>
                          In stock: {product.dbQuantity}
                        </div>
                      )}
                    </CardContent>

                    <CardActions>
                      {product.dbQuantity > 0 ? (
                        <AddToCart
                          product={product}
                          user={props.user}
                          cartItems={props.cartItems}
                          setCartItems={props.setCartItems}
                          itemsCount={props.itemsCount}
                          setItemsCount={props.setItemsCount}
                          setShouldGetCartContent={
                            props.setShouldGetCartContent
                          }
                        />
                      ) : null}

                      <Button size="small" onClick={() => handleShow(product)}>
                        Learn More
                      </Button>
                    </CardActions>
                  </Card>
                  <LearnMore product={product} handleShow={handleShow} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default ItemCard;
