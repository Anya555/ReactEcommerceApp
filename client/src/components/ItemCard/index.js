import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CategoriesNavbar from "../CategoriesNavbar";
import LearnMore from "../LearnMore";
import { useStyles } from "./style";
import API from "../../utils/API";
import firebase from "../../firebase";

const MediaCard = (props) => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    displayAll();
  }, []);

  const handleShow = (itemToShow) => {
    const newProducts = products.map((product) => {
      if (product._id === itemToShow._id) {
        product.open = !product.open;
      }
      return product;
    });
    setProducts(newProducts);
  };

  const displayAll = () => {
    API.displayAllItems()
      .then(async (res) => {
        console.log(res.data);
        let items = res.data;
        await items.map(async (item) => {
          await firebase.storage
            .ref("images/")
            .child(item.image)
            .getDownloadURL()
            .then((url) => (item.imgUrl = url));

          return item;
        });
        setProducts(items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const displayItemCategory = (query) => {
    API.displayCategory(query)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
            {products
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
                      <AddShoppingCartIcon className={classes.cart} />
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
export default MediaCard;
