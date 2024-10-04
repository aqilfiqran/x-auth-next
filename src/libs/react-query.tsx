'use client';

import {
  DefaultOptions,
  MutationCache,
  QueryClient,
  QueryClientProvider,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';

const queryConfig: DefaultOptions = {
  queries: {
    staleTime: 2000,
    retry: 0,
    refetchOnWindowFocus: false,
  },
};

const mutationCache: MutationCache = new MutationCache();

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  mutationCache,
});

export type ExtractFnReturnType<FnType extends (...args: unknown[]) => unknown> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: unknown[]) => unknown> = Omit<
  UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
  'queryKey' | 'queryFn'
>;

export type MutationConfig<MutationFnType extends (...args: unknown[]) => unknown> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
