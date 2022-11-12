import {GET_SECTIONS} from "../../constants/constants";

export const getSections = (payload) => {
  return {
    type: GET_SECTIONS,
    payload,
  };
};

