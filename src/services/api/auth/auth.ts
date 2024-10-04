import { apiInstance } from '../api';
import { OptionsLogin, ResponseLogin } from './auth.types';

const login = ({ body }: OptionsLogin) => apiInstance.post<ResponseLogin>('login', body);

export const authApi = {
  login,
};
