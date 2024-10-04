'use client';

import { createContext, PropsWithChildren, useContext } from 'react';

type ProviderProps<T> = PropsWithChildren & {
  value: T;
};

/**
 * Usage:
 *
 * For example, if you have data types like `WCategories` and `WCategoryDetails`,
 * you can use `createDataContext` to create a new context and provider:
 *
 * import { WCategories, WCategoryDetails } from './type';
 * import { createDataContext } from './path-to-generic-context';
 *
 * const { useData: useCategoryContext, Provider: CategoryProvider } =
 *     createDataContext<{ categories: WCategories; details: WCategoryDetails }>();
 *
 * // In another component
 * <CategoryProvider value={{ categories, details }}>
 *   {...}
 * </CategoryProvider>
 *
 * // To access in a child component
 * const { value } = useCategoryContext();
 * ```
 */

export function createDataContext<T>() {
  const Context = createContext<T | undefined>(undefined);

  const useData = () => {
    const contextValue = useContext(Context);
    if (!contextValue) throw new Error('useData must be used within a Provider');

    return contextValue;
  };

  const Provider = ({ children, value }: ProviderProps<T>) => {
    return <Context.Provider value={value}>{children}</Context.Provider>;
  };

  return { useData, Provider };
}
