import React from "react"
import PropTypes from "prop-types"
import Chip from "@material-ui/core/Chip"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const Skills = ({ skills }) => (
  <Grid container spacing={8}>
    <Grid item xs={12}>
      <Typography>Skills Required</Typography>
    </Grid>
    {skills.map(skill => (
      <Grid key={skill} item xs={12} sm={4} md={4} lg={3}>
        <Chip label={skill} color="secondary" />
      </Grid>
    ))}
  </Grid>
)

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Skills
