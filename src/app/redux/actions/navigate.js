import {NAVIGATE} from "../../constants/constants";

export const navigate = (payload) => {
  return {
    type: NAVIGATE,
    payload
  };
};

export default navigate;
