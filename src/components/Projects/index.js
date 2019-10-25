import React from "react"
import Grid from "@material-ui/core/Grid"
import moment from "moment"

import Page from "../Page"
import Project from "./Project"
import { projects } from "./constants"

const Projects = () => (
  <Page headline="Projects" skinny>
    <Grid container spacing={24}>
      {projects
        .sort((a, b) => {
          if (!a.endDate) {
            return -1
          } else if (!b.endDate) {
            return 1
          } else {
            return moment
              .utc(b.endDate, "MMM YYYY")
              .diff(moment.utc(a.endDate, "MMM YYYY"))
          }
        })
        .map(project => (
          <Grid key={project.id} item xs={12}>
            <Project project={project} />
          </Grid>
        ))}
    </Grid>
  </Page>
)

export default Projects
