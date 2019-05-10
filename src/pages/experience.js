import React, { Fragment } from "react"

import SEO from "../components/SEO"
import Experience from "../components/Experience"

const ExperiencePage = props => (
  <Fragment>
    <SEO title="Work Experience" />
    <Experience {...props} />
  </Fragment>
)

export default ExperiencePage
