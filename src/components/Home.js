import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { withStyles } from "@material-ui/core/styles"
import { Link } from "gatsby"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

import Page from "./Page"

const styles = theme => ({
  container: {
    padding: "24px",
  },
  paper: {
    marginTop: "15em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "10em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "5em",
    },
  },
  inverse: {
    color: "white",
  },
  header: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.3em",
    },
  },
  headline: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  button: {
    margin: theme.spacing.unit,
  },
})

const Home = ({ classes }) => (
  <Page background="images/background.jpg">
    <Grid container>
      <Grid item sm />
      <Grid item xs={12} sm={10}>
        <Paper className={classes.paper} color="primary">
          <div className={classes.container}>
            <Grid container justify="center" spacing={24}>
              <Grid item xs={12}>
                <Typography
                  className={classnames(classes.inverse, classes.header)}
                  variant="h3"
                  align="center"
                >
                  Welcome!
                </Typography>
                <Typography
                  className={classnames(classes.inverse, classes.headline)}
                  variant="h5"
                  align="center"
                  color="inherit"
                >
                  I am a Software Engineer from Waterloo. Click one of the links
                  below to see my experience
                </Typography>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  className={classes.button}
                  to="/experience"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Work Experience
                </Button>
                <Button
                  component={Link}
                  className={classes.button}
                  to="/projects"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Projects
                </Button>
                <Button
                  component={Link}
                  className={classes.button}
                  to="/education"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  Education
                </Button>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Grid>
      <Grid item sm />
    </Grid>
  </Page>
)

Home.propTypes = {
  classes: PropTypes.shape({
    container: PropTypes.string.isRequired,
    paper: PropTypes.string.isRequired,
    inverse: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
  }).isRequired,
}

export default withStyles(styles)(Home)
