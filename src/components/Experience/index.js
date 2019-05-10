import React from "react"
import Grid from "@material-ui/core/Grid"

import Page from "../Page"
import Job from "./Job"
import { jobs } from "./constants"

const Experience = () => (
  <Page headline="Work Experience" skinny>
    <Grid container spacing={24}>
      {jobs.map(job => (
        <Grid key={job.id} item xs={12}>
          <Job job={job} />
        </Grid>
      ))}
    </Grid>
  </Page>
)

export default Experience
