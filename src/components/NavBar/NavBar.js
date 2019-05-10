import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

import * as constants from "../../constants"

const styles = theme => ({
  flex: {
    flex: 1,
  },
  menuButton: {
    marginRight: "20px",
  },
  [theme.breakpoints.down("sm")]: {
    mobileHidden: {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    desktopHidden: {
      display: "none",
    },
  },
})

const NavBar = ({ classes, openSidebar, title }) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <Grid container spacing={16} alignItems="center">
        <Grid className={classes.mobileHidden} item sm />
        <Grid item md={8} sm={12}>
          <Grid container alignItems="center">
            <IconButton
              className={classnames(classes.menuButton, classes.desktopHidden)}
              onClick={openSidebar}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.flex} variant="h6" color="inherit">
              {title}
            </Typography>
            {constants.pages.map(({ path, name }) =>
              path.startsWith("https://") ? (
                <Button
                  key={path}
                  className={classes.mobileHidden}
                  component="a"
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                >
                  {name}
                </Button>
              ) : (
                <Button
                  key={path}
                  className={classes.mobileHidden}
                  component={Link}
                  to={path}
                  color="inherit"
                >
                  {name}
                </Button>
              )
            )}
          </Grid>
        </Grid>
        <Grid className={classes.mobileHidden} item sm />
      </Grid>
    </Toolbar>
  </AppBar>
)

NavBar.propTypes = {
  classes: PropTypes.shape({
    flex: PropTypes.string.isRequired,
    menuButton: PropTypes.string.isRequired,
    mobileHidden: PropTypes.string,
    desktopHidden: PropTypes.string,
  }).isRequired,
  openSidebar: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

export default withStyles(styles)(NavBar)
