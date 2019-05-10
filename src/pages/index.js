import React, { Fragment } from "react"

import SEO from "../components/SEO"
import Home from "../components/Home"

const HomePage = props => (
  <Fragment>
    <SEO title="Home" />
    <Home {...props} />
  </Fragment>
)

export default HomePage
