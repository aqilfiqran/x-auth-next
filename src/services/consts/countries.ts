/* eslint-disable max-lines */
export type CountryCodeType = {
  currency: string[];
  callingCode: string[];
  region: string;
  subregion: string;
  flag: string;
  name: { common: string } | Record<string, string>;
};

export const countryCodes: Record<string, CountryCodeType> = {
  ID: {
    currency: ['IDR'],
    callingCode: ['62'],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAeBAMAAACs80HuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAA9QTFRF5wAR5wAP6h8u/ODi////32xIVQAAAAFiS0dEBI9o2VEAAAAJcEhZcwAAAEgAAABIAEbJaz4AAAAfSURBVCjPY2AYBahAEAtgUMICGIyxAAYXLGBUEA0AAKSuUllCEXddAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDEzLTEwLTA3VDEzOjE0OjQ4KzAyOjAwLpNLqAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxMy0xMC0wN1QxMzoxNDo0OCswMjowMF/O8xQAAAAASUVORK5CYII=',
    name: {
      common: 'Indonesia',
      ces: 'Indonésie',
      deu: 'Indonesien',
      fra: 'Indonésie',
      hrv: 'Indonezija',
      ita: 'Indonesia',
      jpn: 'インドネシア',
      nld: 'Indonesië',
      por: 'Indonésia',
      rus: 'Индонезия',
      slk: 'Indonézia',
      spa: 'Indonesia',
      fin: 'Indonesia',
      est: 'Indoneesia',
      zho: '印度尼西亚',
      pol: 'Indonezja',
      urd: 'انڈونیشیا',
      kor: '인도네시아',
    },
  },
};
