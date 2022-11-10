import axios from 'axios';

export async function getArchives() {
  const response = await axios.get('/archive/getAll');
  return await response.data;
}
