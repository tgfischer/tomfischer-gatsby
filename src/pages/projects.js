import React, { Fragment } from "react"

import SEO from "../components/SEO"
import Projects from "../components/Projects"

const ProjectsPage = props => (
  <Fragment>
    <SEO title="Projects" />
    <Projects {...props} />
  </Fragment>
)

export default ProjectsPage
