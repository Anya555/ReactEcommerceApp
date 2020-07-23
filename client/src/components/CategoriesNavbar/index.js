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
        onClick={(e) => {
          props.displayAll();
          handleMobileMenuClose();
        }}
      >
        Shop All
      </MenuItem>
      <MenuItem
        id="blenders"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Blenders
      </MenuItem>
      <MenuItem
        id="juicers"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Juicers
      </MenuItem>
      <MenuItem
        id="dehydrators"
        onClick={(e) => {
          props.displayItemCategory(e.currentTarget.id);
          handleMobileMenuClose();
        }}
      >
        Dehydrators
      </MenuItem>
      <MenuItem
        id="oilPresses"
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
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <MenuItem
              className={classes.category}
              id="All"
              onClick={() => {
                props.displayAll();
              }}
            >
              Shop All
            </MenuItem>
            <MenuItem
              className={classes.category}
              id="blenders"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Blenders
            </MenuItem>
            <MenuItem
              className={classes.category}
              id="juicers"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Juicers
            </MenuItem>
            <MenuItem
              className={classes.dehydrator}
              id="dehydrators"
              onClick={(e) => props.displayItemCategory(e.currentTarget.id)}
            >
              Dehydrators
            </MenuItem>
            <MenuItem
              className={classes.category}
              id="oilPresses"
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
