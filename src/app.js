import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import StartingPage from "./app/components/starting-page.js";
import SignupContainer
  from "./app/components/sign-up-components/signup-container.js";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, Routes} from "react-router-dom";
import LoginContainer from "./app/components/log-in-components/login-container";
import PostScreen from "./app/components/post-components/post-screen";
import SectionPosts
  from "./app/components/section-post-components/section-posts";
import CreatePostContainer
  from "./app/components/create-post-components/create-post-container";

const theme = createTheme();

class App extends React.Component {
  render() {
    return (
        <Container m-2="true">
          <MuiThemeProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline/>
              <Routes>
                <Route exact path="/" element={<StartingPage/>}/>
                <Route exact path="/signUp" element={<SignupContainer/>}/>
                <Route exact path="/login" element={<LoginContainer/>}/>
                <Route exact path="/post" element={<PostScreen/>}/>
                <Route exact path="/section-posts" element={<SectionPosts/>}/>
                <Route exact path="/create-post" element={<CreatePostContainer/>}/>
              </Routes>
            </ThemeProvider>
          </MuiThemeProvider>
        </Container>
    )
  }
}

export default App;
