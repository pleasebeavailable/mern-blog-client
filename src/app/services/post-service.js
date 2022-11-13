import axios from 'axios';

export async function getAllPosts() {
  const response = await axios.get('/post/getAll');
  return await response.data;
}

export async function getAllSectionPosts(payload) {
  const response = await axios.post('/post/section/getAll', {
    params: {
      section: payload.payload.payload
    }
  });
  return await response.data;
}
