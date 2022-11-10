import axios from 'axios';

export async function getAllSections() {
  const response = await axios.get('/section/getAll');
  return await response.data;
}
