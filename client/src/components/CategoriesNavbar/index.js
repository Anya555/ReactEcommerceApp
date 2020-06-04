import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

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
      <MenuItem
        id="All"
        onClick={(e) => {
          props.displayAll();
          handleMobileMenuClose();
        }}
      >
        All
      </MenuItem>
      <MenuItem
        id="blenders"
        value="blenders"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Blenders
      </MenuItem>
      <MenuItem
        id="juicers"
        value="juicers"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Juicers
      </MenuItem>
      <MenuItem
        id="dehydrators"
        value="dehydrators"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Dehydrators
      </MenuItem>
      <MenuItem
        id="oilPresses"
        value="oilPresses"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Oil Presses
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
          <img
            src="./markaronic.pl.png"
            height="100px"
            width="200px"
            alt="logo"
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem
              id="All"
              onClick={(e) => {
                props.displayAll();
              }}
            >
              All
            </MenuItem>
            <MenuItem
              id="blenders"
              name="search"
              value="blenders"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Blenders
            </MenuItem>
            <MenuItem
              id="juicers"
              name="search"
              value="juicers"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Juicers
            </MenuItem>
            <MenuItem
              id="dehydrators"
              name="search"
              value="dehydrators"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Dehydrators
            </MenuItem>
            <MenuItem
              id="oilPresses"
              name="search"
              value="oilPresses"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Oil Presses
            </MenuItem>
          </div>
          <div className={classes.sectionMobile}>
            <MenuIcon
              style={{ color: "black" }}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            ></MenuIcon>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
