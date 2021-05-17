import React from "react";
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}))

function App(props) {
  const classes = useStyles();

  // Hook for content to be shown
  const [content, setContent] = React.useState("home")
  const [menuPrev, setMenuPrev] = React.useState("home")

  // HandleClick functions
  function handleHomeClick() {
    setContent("home")
  }
  function handleResetClick() { 
    setContent("keypad")
  }
  function handleMenuClick() {
    if (content === "menu") setContent(menuPrev)
    else {
      setMenuPrev(content)
      setContent("menu")
    }
  }

  return (
    <Box className={classes.root}>
      <CssBaseline />
      <Header 
        homeClick={() => handleHomeClick()}
        menuClick={() => handleMenuClick()}
        resetClick={() => handleResetClick()}
        content={content}
      />
      <Main 
        content={content}
        setContent={setContent}
      />
      <Footer />
      <AmplifySignOut /> {/* Logout of amplify on exit */} 
    </Box>
  );
}

export default withAuthenticator(App);