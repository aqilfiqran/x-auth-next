import { authApi } from './auth';
import { apiInstance } from '../api';
import { OptionsLogin, ResponseLogin } from './auth.types';

jest.mock('../api', () => ({
  apiInstance: {
    post: jest.fn(),
  },
}));

describe('authApi', () => {
  describe('login', () => {
    it('should call apiInstance.post with the correct URL and body', async () => {
      const body = { email: 'test@mailnator.com', password: 'testpass' };
      const options: OptionsLogin = { body };
      const response: ResponseLogin = { token: 'testtoken' };

      (apiInstance.post as jest.Mock).mockResolvedValueOnce(response);

      const result = await authApi.login(options);

      expect(apiInstance.post).toHaveBeenCalledWith('login', body);
      expect(result).toEqual(response);
    });

    it('should handle errors correctly', async () => {
      const body = { email: 'john@gmail.com', password: 'testpass' };
      const options: OptionsLogin = { body };
      const error = new Error('Network Error');

      (apiInstance.post as jest.Mock).mockRejectedValueOnce(error);

      await expect(authApi.login(options)).rejects.toThrow('Network Error');
    });
  });
});
