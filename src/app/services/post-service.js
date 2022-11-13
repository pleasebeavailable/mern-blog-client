import axios from 'axios';

export async function getAllPosts() {
  const response = await axios.get('/post/getAll');
  return await response.data;
}

export async function getAllSectionPosts() {
  const response = await axios.get('/post/section/getAll');
  return await response.data;
}
