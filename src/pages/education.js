import React, { Fragment } from "react"

import SEO from "../components/SEO"
import Education from "../components/Education"

const EducationPage = props => (
  <Fragment>
    <SEO title="Education" />
    <Education {...props} />
  </Fragment>
)

export default EducationPage
