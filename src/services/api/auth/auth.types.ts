import { BaseServiceOptions, OptionRecord } from '../api.types';

export type OptionsLogin = Pick<
  BaseServiceOptions<
    OptionRecord,
    OptionRecord,
    {
      email: string;
      password: string;
    }
  >,
  'body'
>;

export type ResponseLogin = {
  token: string;
};
