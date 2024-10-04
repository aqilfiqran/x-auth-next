import { notFound } from 'next/navigation';
import { interpolateText } from './format/json';

// Constants
const REVALIDATE = process.env.appEnv === 'development' ? 1 * 60 : 5 * 60; // In seconds
const LANGUAGE = ['id', 'en'] as const;

type LanguageType = (typeof LANGUAGE)[number];

export function cleanDoubleSlashes(input = ''): string {
  return input
    .split('://')
    .map(string_ => string_.replace(/\/{2,}/g, '/'))
    .join('://');
}

export interface Options {
  path: string;
  lang?: LanguageType;
  baseUrl?: string;
  noCors?: boolean;
  variables?: Record<string, string>;
}

export async function fetchI18n<T extends object = Record<string, string>>({
  path,
  lang = 'id',
  baseUrl = process.env.baseUrlI18n,
  noCors = false,
  variables = {},
}: Options): Promise<T | undefined> {
  if (!LANGUAGE.includes(lang)) {
    notFound();
    return {} as T;
  }

  const pathVariable = interpolateText(path, variables);
  const urls = [
    cleanDoubleSlashes(`${baseUrl}/${pathVariable}/${lang}.json`),
    cleanDoubleSlashes(`${baseUrl}/${path}/${lang}.json`), // Fallback if pathVariable doesn't work
  ];

  const fetchOptions: RequestInit = noCors ? { mode: 'no-cors' } : { next: { revalidate: REVALIDATE } };

  for (const url of urls) {
    try {
      const response = await fetch(url, fetchOptions);
      const i18nObject = (await response.json()) as T;
      return i18nObject;
    } catch (_) {
      // Continue to the next URL if there's an error
    }
  }

  // Return an empty object if all fetches fail
  return {} as T;
}
