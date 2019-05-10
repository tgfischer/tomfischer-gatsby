import React from "react"
import PropTypes from "prop-types"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import CircularProgress from "@material-ui/core/CircularProgress"

const styles = {
  root: {
    height: "100vh",
  },
}

const Loading = ({ classes }) => (
  <Grid container className={classes.root} justify="center" alignItems="center">
    <CircularProgress size={100} />
  </Grid>
)

Loading.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Loading)
