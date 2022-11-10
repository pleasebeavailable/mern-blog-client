export const GET_SECTIONS = 'GET_SECTIONS';
export const GET_SECTIONS_SUCCESS = 'GET_SECTIONS_SUCCESS';

export const getSections = (payload) => {
  return {
    type: GET_SECTIONS,
    payload,
  };
};

