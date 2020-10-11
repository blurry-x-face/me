import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "10px 50px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: "left",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          background: "transparent",
          color: "rgba(0,0,0,0.8)",
          boxShadow: "none",
        }}
        position="static"
      >
        <Toolbar
          style={{
            paddingRight: 0,
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Typography variant="h6" className={classes.title}>
            <Link style={{ color: "#262626", textDecoration: "none" }} to="/">
              {" "}
              Home{" "}
            </Link>
          </Typography>
          <div className="menue-btns">
            <Link to="/about" className="nav-btn" color="inherit">
              About me
            </Link>
            <Link to="/projects" className="nav-btn" color="inherit">
              Projects
            </Link>
            {/* <Link to="/contact" className="nav-btn" color="inherit">
              Contact
            </Link> */}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
