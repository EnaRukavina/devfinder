import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/',
});

export const getUser = async (username: string) =>
  api.get(`users/${username}`).then(res => res.data);
