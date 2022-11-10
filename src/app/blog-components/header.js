import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Search from "../components/search-component/search.js";
import SectionsPage from "../components/section-components/sections-page";
import {useNavigate} from "react-router-dom";

type Props = {
  title: string;
}

export default function Header(props: Props) {
  const {title} = props;

  const navigate = useNavigate();

  const goToLoginForm = () => {
    navigate("/login");
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
            {title}
          </Typography>
          <Search style={{margin: "auto"}}/>
          <Button
              variant="outlined"
              size="small"
              onClick={() => goToLoginForm()}
          >
            Log in
          </Button>
        </Toolbar>
        <SectionsPage/>
    </React.Fragment>
  );
}
