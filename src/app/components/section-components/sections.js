import React from "react";
import {Link, Toolbar} from "@mui/material";
import {useSelector} from "react-redux";

export default function SectionsScreen() {
  const sectionsState = useSelector(state => state.section);
  const sections = sectionsState.sections;

  const ConditionalRender = () => {
    if (sectionsState.isLoading) {
      return <div>Loading...</div>
    } else {
      return <Toolbar
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
    }
  }
  return (
      <React.Fragment>
        <ConditionalRender/>
      </React.Fragment>
  );
}



