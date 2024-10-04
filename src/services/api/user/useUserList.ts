import { useQuery } from '@tanstack/react-query';
import { userKeys } from './user.keys';
import { userApi } from './user';
import { OptionsUserList } from './user.types';

export const useUserList = (options: OptionsUserList) => {
  return useQuery({
    queryKey: userKeys.list(options),
    queryFn: ({ queryKey: [{ options }] }) => userApi.userList(options),
    select: response => response.data,
  });
};
