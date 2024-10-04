import Axios, { AxiosError, AxiosInstance } from 'axios';
import { ApiResponse } from './api.types';

export const apiInstance: AxiosInstance = Axios.create({
  baseURL: process.env.apiUrl,
  timeout: 1e5,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiInstance.interceptors.response.use(
  response => {
    const customResponse: ApiResponse = { ...response, kind: 'ok' };
    return customResponse;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);
