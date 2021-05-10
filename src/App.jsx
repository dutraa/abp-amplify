import React from "react";
import { CssBaseline, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles";

// import backgroundImg from "./media/background.png"

import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const useStyles = makeStyles(theme => ({
  root : {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // backgroundImage: `url(${backgroundImg})`,
  },
}))

function App(props) {
  const classes = useStyles();

  // Hook for content to be shown
  // TODO: Should start as "home"
  const [content, setContent] = React.useState("home")
  const [menuPrev, setMenuPrev] = React.useState("home")

  function handleHomeClick() {
    setContent("home")
  }
  function handleResetClick() { 
    if (content !== "home" && content !== "menu") {
      setContent("keypad")
    }
  }
  function handleMenuClick() {
    if (content === "menu") {
      setContent(menuPrev)
    } else {
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
      />
      <Main 
        content={content}
        setContent={setContent}
      />
      <Footer />
    </Box>
  );
}

export default App;
