import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import StartingPage from "./app/components/starting-page.js";
import SignupContainer
  from "./app/components/sign-up-components/signup-container.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginContainer from "./app/components/log-in-components/login-container";

const theme = createTheme();

function App() {
  return (
      <Router>
        <Container m-2="true">
          <MuiThemeProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Routes>
                <Route
                    path="/"
                    element={
                      <StartingPage/>
                    }
                />
                <Route
                    path="/signUp"
                    element={
                      <SignupContainer/>
                    }
                />
                <Route
                    path="/login"
                    element={
                      <LoginContainer/>
                    }
                />
              </Routes>
            </ThemeProvider>
          </MuiThemeProvider>
        </Container>
      </Router>
  );
}

export default App;
