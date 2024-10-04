import { useMutation } from '@tanstack/react-query';
import { authApi } from './auth';

export const useLogin = () => {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: response => {
      // set token to local storage
      localStorage.setItem('token', response.data.token);
    },
    // onError: (error: ErrorResponse) => {
    //   Alert.alert('Error', error.response.data?.error);
    // },
  });
};
