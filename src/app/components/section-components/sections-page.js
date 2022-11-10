import React, {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {getSections} from "../../redux/actions/section";
import SectionsScreen from "./sections";

export default function SectionsPage() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSections());
  }, [dispatch]);

  return (
      <React.Fragment>
        <SectionsScreen/>
      </React.Fragment>
  );
}

