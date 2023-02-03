import axios from 'axios';

function login(data: { email: string; password: string }) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/login',
    data
  );
}

function signup(data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/sing-up',
    data
  );
}

function forgetPassword(data: { email: string }) {
  return axios.post(
    'https://paracuando-team1.academlo.tech/api/v1/auth/forget-password',
    data
  );
}

function changePassword(data: { password: string }, token: string) {
  return axios.post(
    `https://paracuando-team1.academlo.tech/api/v1/auth/change-password/${token}`,
    data
  );
}

export { login, signup, forgetPassword, changePassword };
