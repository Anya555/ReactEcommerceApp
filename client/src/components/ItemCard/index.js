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

  // get url for each image from firebase
  const setImageUrl = async (item) => {
    return await firebase.storage
      .ref("images/")
      .child(item.image)
      .getDownloadURL()
      .then((url) => (item.imgUrl = url));
  };

  // display all products from database
  const displayAll = () => {
    API.displayAllItems()
      .then((res) => {
        let items = res.data;
        items.forEach((item) => {
          item.open = false;
        });
        Promise.all(items.map((item) => setImageUrl(item))).then(() => {
          setProducts(items);
          setFilteredProducts(items);
        });
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
    <>
      <CategoriesNavbar
        displayItemCategory={displayItemCategory}
        displayAll={displayAll}
      />
      <Grid container className={classes.main} spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={2}>
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
                  {" "}
                  <Card className={classes.root}>
                    <img
                      src={product.imgUrl}
                      alt="product"
                      height="100px"
                      width="100px"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.name}
                      </Typography>
                      <div>Price: $ {product.price}</div>
                    </CardContent>
                    <CardActions>
                      <AddToCart product={product} user={props.user} />
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
    </>
  );
};
export default ItemCard;
