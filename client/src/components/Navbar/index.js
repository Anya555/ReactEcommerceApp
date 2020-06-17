import React from "react";
import { Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import Home from "@material-ui/icons/Home";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useStyles } from "./style";

const PrimarySearchAppBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleInputChange = (e) => {
    props.setSearch(e.target.value);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
          Log in
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          Sign up
        </Link>
      </MenuItem>
      <MenuItem
        onClick={() => {
          props.history.replace("/login");
          handleMenuClose();
        }}
      >
        Log out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <Home />
            </Badge>
          </IconButton>
          Home
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/contact" style={{ textDecoration: "none", color: "black" }}>
          <IconButton color="inherit">
            <Badge color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          Contact us
        </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
          <IconButton aria-label="show 1 new notifications" color="inherit">
            <Badge badgeContent={props.itemsCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          Shopping cart
        </Link>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar style={{ margin: 0, backgroundColor: "#bdbdbd" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          ></IconButton>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ color: "#4caf50" }} />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={handleInputChange}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton>
              <Link to="/" style={{ color: "black" }}>
                <Home />
              </Link>
            </IconButton>
            <IconButton color="inherit">
              <Link to="/contact" style={{ color: "#4caf50" }}>
                <MailIcon />
              </Link>
            </IconButton>
            <IconButton aria-label="show 0 new notifications" color="inherit">
              <Badge badgeContent={props.itemsCount} color="secondary">
                <Link to="/cart" style={{ color: "black" }}>
                  <ShoppingCart />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              style={{ color: "#4caf50" }}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};
export default withRouter(PrimarySearchAppBar);
