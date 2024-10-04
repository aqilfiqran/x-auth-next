import { apiInstance } from '../api';
import { OptionsUserDetail, OptionsUserList, ResponseUserDetail, ResponseUserList } from './user.types';

const userList = ({ query }: OptionsUserList) => apiInstance.get<ResponseUserList>('users', { params: query });

const userDetail = ({ params }: OptionsUserDetail) => apiInstance.get<ResponseUserDetail>(`users/${params?.id}`);

export const userApi = {
  userList,
  userDetail,
};
