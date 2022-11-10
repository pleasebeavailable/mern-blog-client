import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {getSections} from "../../redux/actions/section.js";

function SectionsPage() {
  useEffect(() => {
    getSections();
  }, []);
  return (
      <React.Fragment>
        {/*<SectionsScreen/>*/}
      </React.Fragment>
  );
}

const mapDispatch = {
  setSections: getSections
}
export default connect(null, mapDispatch)(SectionsPage);
