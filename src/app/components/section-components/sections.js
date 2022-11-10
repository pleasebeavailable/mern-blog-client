import React from "react";
import {useSelector} from 'react-redux';
import {Link, Toolbar} from "@mui/material";

export default function SectionsScreen() {

  const sections = useSelector(state => state.sections);
  return (
      <React.Fragment>
        <Toolbar
            component="nav"
            variant="dense"
            sx={{justifyContent: "space-between", overflowX: "auto"}}
        >
          {sections.map((section, index) => (
              <Link
                  key={index}
                  style={{textDecoration: 'none'}}
                  noWrap
                  variant="body2"
                  href={section.url}
                  sx={{p: 1, flexShrink: 0}}
              >
                {section.title}
              </Link>
          ))}
        </Toolbar>
      </React.Fragment>
  );
}



