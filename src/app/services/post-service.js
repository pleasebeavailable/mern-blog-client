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

export async function createNewPost(payload) {
  const response = await axios.post('/post/createNewPost/', payload);
  return await response.data;
}

export async function getPostComments(payload) {
  const response = await axios.get('/post/getPostComments/' + payload);
  return await response.data;
}

export async function postNewComment(payload) {
  const response = await axios.post('/post/newComment', {
    postId: payload.payload.postId,
    comment: payload.payload.comment
  });
  return await response.data;
}

export async function deleteSelectedComment(payload) {
  const response = await axios.delete(
      '/post/deleteComment/' + payload.payload.commentId);
  return await response.data;
}
