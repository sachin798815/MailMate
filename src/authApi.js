import axios from 'axios';

const API_KEY = "AIzaSyAe7ZeUixlFpWNrtZtstMDuhjcbrgbs4LA";
const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts';

export const signUp = (email, password) =>
  axios.post(`${BASE_URL}:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });

export const signIn = (email, password) =>
  axios.post(`${BASE_URL}:signInWithPassword?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });
