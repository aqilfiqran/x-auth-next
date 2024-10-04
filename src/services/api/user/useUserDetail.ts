import { useQuery } from '@tanstack/react-query';
import { userKeys } from './user.keys';
import { userApi } from './user';
import { OptionsUserDetail } from './user.types';

export const useUserDetail = (options: OptionsUserDetail) => {
  return useQuery({
    queryKey: userKeys.detail(options),
    queryFn: ({ queryKey: [{ options }] }) => userApi.userDetail(options),
    select: response => response.data.data,
  });
};
