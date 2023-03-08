import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router } from "react-router-dom"
import { createTheme, ThemeProvider } from "@mui/material"
import { Provider as StoreProvider } from "react-redux"
import { store } from "./store"

const theme = createTheme({})

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </StoreProvider>
)
