import { userApi } from './user';
import { apiInstance } from '../api';
import { OptionsUserDetail, OptionsUserList, ResponseUserDetail, ResponseUserList } from './user.types';

jest.mock('../api');

describe('userApi', () => {
  describe('userList', () => {
    it('should fetch the user list with the correct query parameters', async () => {
      const query = { page: 1, limit: 10 };
      const response: ResponseUserList = {
        data: [
          {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john@gmail.com',
            avatar: 'https://example.com/avatar.jpg',
          },
        ],
        page: 1,
        per_page: 10,
        total: 1,
        total_pages: 1,
      };
      (apiInstance.get as jest.Mock).mockResolvedValue({ data: response });

      const result = await userApi.userList({ query: query as OptionsUserList['query'] });

      expect(apiInstance.get).toHaveBeenCalledWith('users', { params: query });
      expect(result.data).toEqual(response);
    });
  });

  describe('userDetail', () => {
    it('should fetch the user detail with the correct user ID', async () => {
      const params = { id: '123' };
      const response: ResponseUserDetail = {
        data: {
          id: 1,
          first_name: 'John',
          last_name: 'Doe',
          email: 'john@gmail.com',
          avatar: 'https://example.com/avatar.jpg',
        },
      };
      (apiInstance.get as jest.Mock).mockResolvedValue({ data: response });

      const result = await userApi.userDetail({ params: params as OptionsUserDetail['params'] });

      expect(apiInstance.get).toHaveBeenCalledWith(`users/${params.id}`);
      expect(result.data).toEqual(response);
    });
  });
});
