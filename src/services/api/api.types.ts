import { AxiosError, AxiosResponse } from 'axios';
import { GeneralApiProblem } from './apiProblem';
import { JsonType } from '@/types/common';

export type ApiSuccessResponse<T> = AxiosResponse<T> & {
  kind: 'ok';
};
export type ApiErrorResponse = AxiosResponse & GeneralApiProblem;

export type ApiResponse<T = JsonType> = ApiSuccessResponse<T> | ApiErrorResponse;

type OptionKey = string | number;
type OptionValue = string | string[] | number | number[] | boolean;

export type OptionRecord = Record<OptionKey, OptionValue>;

/**
 * Standard option object for services.
 *
 * @template P - The type of the parameters.
 * @template Q - The type of the query parameters.
 * @template B - The type of the request body.
 */
export interface BaseServiceOptions<
  P extends OptionRecord = OptionRecord,
  Q extends OptionRecord = OptionRecord,
  B extends OptionRecord = OptionRecord,
> {
  params?: P;
  query?: Q;
  body?: B;
}

export interface ErrorRecord {
  [key: string]: string;
}

export interface BaseResponse<T> {
  data: T;
}

export interface PaginatedResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T;
}

export interface ErrorResponse extends AxiosError {
  response: AxiosError['response'] &
    GeneralApiProblem & {
      data: ErrorRecord;
    };
}
