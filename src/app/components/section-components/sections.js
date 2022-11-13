import React from "react";
import {Link, Toolbar} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getSectionPosts, readPost} from "../../redux/actions/post";
import {GET_SECTION_POSTS} from "../../constants/constants";

export default function SectionsScreen() {
  const sectionsState = useSelector(state => state.section);
  const sections = sectionsState.sections;
  const dispatch = useDispatch();

  const goToSectionPosts = (payload) => {
    dispatch(getSectionPosts({route: GET_SECTION_POSTS, payload}));
  };
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
                onClick={() => goToSectionPosts(section.title)}
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



