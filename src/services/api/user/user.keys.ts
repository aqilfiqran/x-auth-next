import { OptionsUserDetail, OptionsUserList } from './user.types';

export const userKeys = {
  all: [{ namespace: 'user' }] as const,
  details: () => [{ entity: 'detail', ...userKeys.all[0] }] as const,
  detail: (options: OptionsUserDetail) => [{ ...userKeys.details()[0], options }] as const,
  lists: () => [{ entity: 'lists', ...userKeys.all[0] }] as const,
  list: (options: OptionsUserList) => [{ ...userKeys.lists()[0], options }] as const,
};
