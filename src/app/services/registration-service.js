import SignupRequest from "../model/signup-request";
import axios from 'axios';
import LoginRequest from "../model/login-request";

export async function signup(req: SignupRequest) {
  const response = await axios.post(`/user/register`, {user: req});
  return await response.data;
}

export async function login(req: LoginRequest) {
  const response = await axios.post(`/user/login`, {user: req});
  return await response.data;
}
