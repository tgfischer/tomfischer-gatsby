import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import SidebarProvider from "../../contexts/SidebarProvider"
import theme from "../../themes/default"
import Page from "./Page"

const Wrapper = props => (
  <MuiThemeProvider theme={theme}>
    <SidebarProvider>
      <CssBaseline />
      <Page {...props} />
    </SidebarProvider>
  </MuiThemeProvider>
)

export default Wrapper
