import axios from 'axios';

export async function getAllPosts() {
  const response = await axios.get('/post/getAll');
  return await response.data;
}
