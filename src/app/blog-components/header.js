import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SectionsPage from "../components/section-components/sections-page";
import Search from "../components/search-component/search";
import {useDispatch, useSelector} from "react-redux";
import navigate from "../redux/actions/navigate";
import {LOGIN_ROUTE} from "../constants/routes";
import {logoutAction} from "../redux/actions/user";

type Props = {
  title: string;
}

export default function Header(props: Props) {
  const {title} = props;

  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const goToLoginForm = () => {
    dispatch(navigate({route: LOGIN_ROUTE}));
  };

  const logout = () => {
    dispatch(logoutAction())
  };
  return (
      <React.Fragment>
        <Toolbar sx={{borderBottom: 1, borderColor: "divider"}}>
          <Button size="small">Subscribe</Button>
          <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="center"
              noWrap
              sx={{flex: 1}}
          >
            Hello {user.user.username}
          </Typography>
          <Search style={{margin: "auto"}}/>
          {!user.isAuthenticated && <Button
              variant="outlined"
              size="small"
              onClick={() => goToLoginForm()}
          >
            Log in
          </Button>}
          {user.isAuthenticated && <Button
              variant="outlined"
              size="small"
              onClick={() => logout()}>Log out</Button>}
        </Toolbar>
        <SectionsPage/>
    </React.Fragment>
  );
}
