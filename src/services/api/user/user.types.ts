import { BaseResponse, BaseServiceOptions, OptionRecord, PaginatedResponse } from '../api.types';
import { IUser } from './user.interface';

export type OptionsUserList = Pick<
  BaseServiceOptions<
    OptionRecord,
    OptionRecord,
    {
      page: number;
      per_page: number;
    }
  >,
  'query'
>;

export type ResponseUserList = PaginatedResponse<IUser[]>;

export type OptionsUserDetail = Pick<
  BaseServiceOptions<{ id: string }, OptionRecord, OptionRecord>,
  'params' | 'query'
>;

export type ResponseUserDetail = BaseResponse<IUser>;
