import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const BASE_URL = publicRuntimeConfig.BASE_URL;

function login(data: { email: string; password: string }) {
  return axios.post(`${BASE_URL}/auth/login`, data);
}

function userSignup(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  return axios.post(`${BASE_URL}/auth/sign-up`, data);
}

function forgetPassword(data: { email: string }) {
  return axios.post(`${BASE_URL}/auth/forget-password`, data);
}

function changePassword(data: { password: string }, token: string) {
  return axios.post(`${BASE_URL}/auth/change-password/${token}`, data);
}

export { login, userSignup, forgetPassword, changePassword };
