import React from "react";
import TextField from "material-ui/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [state, setSearchState] = React.useState({
    isSearchEnabled: false,
    field: "",
  });

  const onIconClick = () => setIsSearchEnabled();

  function setIsSearchEnabled() {
    setSearchState({
      field: state.field,
      isSearchEnabled: !state.isSearchEnabled,
    });
  }

  function handleSearchInput(event) {
    const field = event.target.value;
    setSearchState({field: field, isSearchEnabled: state.isSearchEnabled});
  }

  return (
      // <div  style={{ margin: "auto" }}>
      <React.Fragment>
        {state.isSearchEnabled && (
            <TextField
                name="search"
                floatingLabelText="Search..."
                onChange={handleSearchInput}
                value={state.field}
                style={{marginBottom: "25px", marginRight: "15px"}}
            />
        )}
        <IconButton onClick={onIconClick}>
          <SearchIcon/>
        </IconButton>
      </React.Fragment> // </div>
  );
}
